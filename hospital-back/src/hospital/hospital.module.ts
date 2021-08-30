import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from "./hospital.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Questions } from "../entities/Questions";
import { Result } from "../entities/Result";
import { Answers } from "../entities/Answers";

@Module({
  providers: [HospitalService],
  controllers: [HospitalController],
  imports: [TypeOrmModule.forFeature([Questions, Result, Answers]), ]
})
export class HospitalModule {}
