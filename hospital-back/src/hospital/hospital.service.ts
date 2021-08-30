import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Questions } from "../entities/Questions";
import { Repository } from "typeorm";
import { chooseSingleType, decideMBTI, switchType } from "./utils";
import { Result } from "../entities/Result";
import { Answers } from "../entities/Answers";

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Questions)
    private questionRepository: Repository<Questions>,
    @InjectRepository(Result) // 이게 없으면 dist 파일에 엔티티 생성안된다.
    private resultRepository: Repository<Result>,
    @InjectRepository(Answers)
    private answersRepository: Repository<Answers>
  ) {
  }

  findAllQuestions() {
    return this.questionRepository.find();
  }

  async getResult(mbtiType) {
    const resultId: number = 1; // switchType(mbtiType);
    return await this.resultRepository.findOne(resultId); // typeorm 은 getbyId (x)
  }


  // 응답결과 배열 기반으로 유형 연산 로직
  async saveAnswers(resultArray) {
    console.log(resultArray);
    // const MBTIArray = chooseSingleType(resultArray) // resultArray 개별 원소 저장 => entity 를 만들어 저장해야하나.
    const finalMBTI = decideMBTI(chooseSingleType(resultArray));
    const res = await this.getResult(finalMBTI); // MBTI type
    // await this.answersRepository.save();
    return res;
  }
}

// finalResult 가 나왔으니 이제는 switch 문을 사용할 때 =>
// switch()의 결과에 따라 getById() 로 결과테이블을 조회. => 결과 테이블 스키마 어떻게 구성할 것인지.
// get id 어노테이션 추가하여 function 및 로직 생성
// return 받은 데이터로 결과지에 뿌린다.
