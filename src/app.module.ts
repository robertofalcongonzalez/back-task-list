import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { TasksEntity } from './tasks/tasks.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'ec2-54-194-147-61.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'tuhpkvrjczjbtc',
      password:
        'c171a015d8a8c5e2a8ddab3129f3f01f866bbf137a35ed668f3580d2973ba63b',
      database: 'd2episr2bal8jl',
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      entities: [TasksEntity],
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
