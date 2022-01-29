import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksModule } from "./tasks/tasks.module";
import { TasksEntity } from "./tasks/tasks.entity";

@Module({
  imports: [TypeOrmModule.forRoot({
    name: 'default',
    type: "postgres",
    host: "ec2-52-31-219-113.eu-west-1.compute.amazonaws.com",
    port: 5432,
    username: "lwvfzsyjiajptr",
    password: "fb57cf751022abf51680215d6830934d2e592aa2165dda1cb30a79211fa22c00",
    database: "d7uem1ikfsshv7",
    synchronize: true,
    ssl: true,
    entities: [
      TasksEntity
    ]
  }), TasksModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
