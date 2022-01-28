import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { TasksEntity } from "./tasks.entity";
import { TasksDTO } from "./tasks.dto";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private tasksRepository: Repository<TasksEntity>,
  ) {}

  async showAll() {
    return await this.tasksRepository.find();
  }

  async create(data: TasksDTO) {
    const task = this.tasksRepository.create(data);
    await this.tasksRepository.save(task);
    return task;
  }

  async read(id: number) {
    return await this.tasksRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<TasksDTO>) {
    await this.tasksRepository.update({ id }, data);
    return await this.tasksRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.tasksRepository.delete({ id });
    return { deleted: true };
  }
}
