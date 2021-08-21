import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from "./hospital.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Questions } from "../entities/Questions";

@Module({
  providers: [HospitalService],
  controllers: [HospitalController],
  imports: [TypeOrmModule.forFeature([Questions]), ]
})
export class HospitalModule {}
