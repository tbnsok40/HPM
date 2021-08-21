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
}
