import { Exclude, Expose, Transform } from 'class-transformer';
import { differenceInYears } from 'date-fns';

@Exclude()
export class ResponseDto {
  @Transform(({ obj }: { obj: ResponseDto }) =>
    differenceInYears(Date.now(), obj.birthday),
  )
  @Expose()
  age: number;

  @Expose()
  fullName: string;

  @Expose({
    groups: ['email', 'sms'],
    since: 4,
  })
  @Transform(({ obj }: { obj: ResponseDto }) => obj.fullName.split(' ')[0], {
    groups: ['sms', 'email'],
  })
  nickname: string;

  @Expose({
    groups: ['login'],
  })
  birthday: Date;

  @Expose()
  category: string;
}
