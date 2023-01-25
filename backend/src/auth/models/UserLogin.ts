import { User } from 'src/user/entities/user.entity';

export interface UserLogin {
  user: User;
  access_token: string;
}
