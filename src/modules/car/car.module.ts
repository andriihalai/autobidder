import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarSchema } from './car.schema';

@Module({
  imports: [TypeOrmModule.forFeature([CarSchema])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
