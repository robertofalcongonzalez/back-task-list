import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { TasksEntity } from "./tasks/tasks.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: null,
    database: 'basic_task_list',
    entities: [
      TasksEntity,
    ],
    synchronize: true,
  }), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
