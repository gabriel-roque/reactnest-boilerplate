import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import * as ormconfig from 'ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'app/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule],
  controllers: [AppController],
})
export class AppModule {}
