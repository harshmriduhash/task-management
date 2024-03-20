import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/user.controller';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { UsersService } from './users/user.service';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, TasksModule],
  controllers: [UsersController, TasksController],
  providers: [UsersService],
})
export class AppModule {}
