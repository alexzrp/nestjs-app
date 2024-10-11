import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsDate, IsEnum, IsString, MaxDate, MaxLength } from 'class-validator';
import { subYears } from 'date-fns';

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
  @Transform(
    ({ obj }: { obj: CreateRegisterDto }) => `${obj.firstName} ${obj.lastName}`,
    {},
  )
  fullName: string;

  @IsDate()
  @MaxDate(() => subYears(new Date(), 18), {
    message: 'birthday is too close',
  })
  @Expose()
  birthday: Date;

  @IsEnum(ECategory)
  @Expose()
  category: ECategory;
}
