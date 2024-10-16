import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';

import { CreateRegisterDto } from './dto/create-register.dto';
import { ResponseDto } from './dto/response.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(@Body() createRegisterDto: CreateRegisterDto): ResponseDto {
    const register = this.registerService.create(createRegisterDto);
    //console.log(register);
    const response = plainToInstance(ResponseDto, register);
    console.log(
      instanceToPlain(response, {
        groups: ['email'],
        version: 4,
      }),
    );
    return response;
  }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRegisterDto: UpdateRegisterDto,
  ) {
    return this.registerService.update(+id, updateRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerService.remove(+id);
  }
}
