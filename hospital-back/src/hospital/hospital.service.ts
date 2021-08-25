import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../entities/Questions";
import { Repository } from "typeorm";
import { chooseSingleType, decideMBTI, switchType } from "./utils";

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

  async getResult(mbtiType) {
    const resultId:number = switchType(mbtiType);
    // return await this.newRepository.findOne(resultId); // typeorm 은 getbyId (x)
  }


  // 응답결과 배열 기반으로 유형 연산 로직
  async saveAnswers(resultArray) {

    const MBTIArray = chooseSingleType(resultArray)
    const finalMBTI = decideMBTI(MBTIArray);
    await this.getResult(finalMBTI) // MBTI type
    // return this.questionRepository.save();
  }
}

// finalResult 가 나왔으니 이제는 switch 문을 사용할 때 =>
// switch()의 결과에 따라 getById() 로 결과테이블을 조회. => 결과 테이블 스키마 어떻게 구성할 것인지.
// get id 어노테이션 추가하여 function 및 로직 생성
// return 받은 데이터로 결과지에 뿌린다.
