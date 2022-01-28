import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;
}
