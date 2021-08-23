import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../entities/Questions";
import { Repository } from "typeorm";
import { MBTI } from "./constants";

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Questions)
    private questionRepository: Repository<Questions>
  ) {
  }

  findAllQuestions() {
    return this.questionRepository.find();
  }

  // 응답결과 배열 기반으로 유형 연산 로직
  saveAnswers(resultArray) {

    const countElements = (array, x) => array.filter(arr => x === arr).length
    const data = new Set(resultArray.filter(result => countElements(resultArray, result) > 1))
    let finalResult = ''
    MBTI.forEach(type => {
      if (data.has(type)) {
        finalResult += type
      }
    })
    console.log(finalResult); // 개별 유형인 resultArray 있으면 된다. 저장할 것
    // return this.questionRepository.save();
  }
}
