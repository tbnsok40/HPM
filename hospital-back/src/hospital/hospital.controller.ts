import { Controller, Get, Post } from "@nestjs/common";
import { HospitalService } from "./hospital.service";

@Controller('hospital')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {
  }

  @Get()
  getHospitalQuestions(){
    return this.hospitalService.findAllQuestions()
  }


  // 우선 답변을 배열 형태로 받아야 한다.
  @Post()
  postAnswers(resultArray){
    return this.hospitalService.saveAnswers(resultArray)
  }
}
