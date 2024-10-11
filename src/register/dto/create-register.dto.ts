import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsEnum,
  IsString,
  MaxDate,
  MaxLength,
  MinDate,
  MinLength,
  Validate,
} from 'class-validator';
import { subYears } from 'date-fns';
import { ApiHideProperty } from '@nestjs/swagger';

enum ECategory {
  PERSONAL = 'PERSONAL',
  COMPANY = 'COMPANY',
  NONPROFIT = 'NONPROFIT',
}

@Exclude()
export class CreateRegisterDto {
  @IsString() // validator
  @MaxLength(3)
  @Transform(({ value }: { value: string }) => {
    return value.toUpperCase();
  })
  @Expose({
    toClassOnly: true,
  })
  firstName: string;

  @IsString()
  @Transform(({ value }: { value: string }) => {
    return value.toUpperCase();
  })
  @Expose({
    toClassOnly: true,
  })
  lastName: string;

  @Expose({
    toPlainOnly: true,
  })
  @ApiHideProperty()
  @Transform(({ obj }) => `${obj.firstName} ${obj.lastName}`, {})
  fullName: string;

  @IsDate()
  @MaxDate(() => subYears(Date.now(), 18), {
    message: 'birthday is too close',
  })
  @Expose()
  birthday: Date;

  @IsEnum(ECategory)
  @Expose()
  category: ECategory;
}
