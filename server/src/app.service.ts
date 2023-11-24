import { Injectable } from '@nestjs/common';
import { cancelPrevious } from 'utils-decorators';
import { UserDto } from './dto/user.dto';

export type User = { email: string; number: string };

@Injectable()
export class AppService {
  private readonly Users: User[];

  constructor() {
    this.Users = [
      {
        email: 'jim@gmail.com',
        number: '221122',
      },
      {
        email: 'jam@gmail.com',
        number: '830347',
      },
      {
        email: 'john@gmail.com',
        number: '221122',
      },
      {
        email: 'jams@gmail.com',
        number: '349425',
      },
      {
        email: 'jams@gmail.com',
        number: '141424',
      },
      {
        email: 'jill@gmail.com',
        number: '822287',
      },
      {
        email: 'jill@gmail.com',
        number: '822286',
      },
    ];
  }

  @cancelPrevious()
  async getUsers(userDto: UserDto): Promise<User[]> {
    const { email, number } = userDto;

    await new Promise((r) => setTimeout(r, 5000));
    return this.Users.filter(({ email: userEmail, number: userNumber }) => {
      if (number) {
        return email === userEmail && number === userNumber;
      }
      return email === userEmail;
    });
  }
}
