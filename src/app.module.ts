import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { TasksEntity } from "./tasks/tasks.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ec2-52-31-219-113.eu-west-1.compute.amazonaws.com',
    username: 'lwvfzsyjiajptr',
    password: '5432',
    database: 'd7uem1ikfsshv7',
    entities: [
      TasksEntity,
    ],
    synchronize: false,
  }), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
