import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

// src/tasks/task.dto.ts
export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Transform(({ value }) => value.trim())
  title: string;

  @ApiProperty()
  @IsString()
  @Transform(({ value }) => value.trim())
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  title?: string;
  @IsString()
  @Transform(({ value }) => value.trim())
  description?: string;
}
