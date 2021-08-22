import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../entities/Questions";
import { Repository } from "typeorm";

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

    const resultObj = {
      "IE": '',
      "SN" : '',
      "TF" : '',
      "JP" : ''
    }
    const IE = ["I", "E"]
    const SN = ["S", "N"]
    const TF = ["T", "F"]
    const JP = ["J", "P"]

    const switchResult = (key) => {
      switch (true) {
        case IE.includes(key):
          resultObj.IE = key
          break
        case SN.includes(key):
          resultObj.SN = key

          break
        case TF.includes(key):
          resultObj.TF = key

          break
        case JP.includes(key):
          resultObj.JP = key
          break
      }
    }

    const mbti = {
      "E" : 2,
      "I" : 1,

      "S":1,
      "N":2,

      "F" : 3,
      "T":0,

      "P":0,
      "J":3
    }

    for (let key in mbti) {
      if (mbti[key] > 1) {
        switchResult(key)
      }
    }
    // return this.questionRepository.save();
  }
}
