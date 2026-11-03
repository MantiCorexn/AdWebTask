import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
} from 'class-validator';

export class CreateFacultyDto {
  @IsString()
  @IsNotEmpty()
  Id!: string;

  @IsString()
  @IsNotEmpty()
  Name!: string;

  @IsString()
  @IsNotEmpty()
  expertise!: string;

  @IsInt()
  @Min(0)
  noOfPublication!: number;
}