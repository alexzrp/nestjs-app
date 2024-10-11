import { Injectable } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';

import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Injectable()
export class RegisterService {
  create(createRegisterDto: CreateRegisterDto) {
    return instanceToPlain(createRegisterDto, {});
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return `This action updates a #${id} register with ${JSON.stringify(updateRegisterDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
