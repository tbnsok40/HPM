import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HospitalController } from './hospital/hospital.controller';
import { HospitalModule } from './hospital/hospital.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [HospitalModule, TypeOrmModule.forRoot(
    { keepConnectionAlive: true }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
