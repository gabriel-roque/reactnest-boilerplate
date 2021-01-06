import { Module } from '@nestjs/common';
import { UserController } from 'app/user/user.controller';

@Module({
  controllers: [UserController],
})
export class UserModule {}
