import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AppService, User } from './app.service';
import { UserDto } from './dto/user.dto';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(200)
  getUsers(@Body() userDto: UserDto): Promise<User[]> {
    return this.appService.getUsers(userDto);
  }
}
