import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from "./hospital.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Questions } from "../entities/Questions";
import { Result } from "../entities/Result";

@Module({
  providers: [HospitalService],
  controllers: [HospitalController],
  imports: [TypeOrmModule.forFeature([Questions, Result]), ]
})
export class HospitalModule {}
