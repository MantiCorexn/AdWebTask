import {
  Injectable,
  ConflictException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultiesRepo: Repository<Faculty>,
  ) {}

  async createFaculty(dto: CreateFacultyDto) {
    const existingFaculty = await this.facultiesRepo.findOne({
      where: { Id: dto.Id },
    });

    if (existingFaculty) {
      throw new ConflictException(
        'Faculty with this Id already exists',
      );
    }

    const faculty = this.facultiesRepo.create({
      Id: dto.Id,
      Name: dto.Name,
      expertise: dto.expertise,
      noOfPublication: dto.noOfPublication,
    });

    const savedFaculty = await this.facultiesRepo.save(faculty);

    return {
      message: 'Faculty created successfully',
      data: savedFaculty,
    };
  }
}