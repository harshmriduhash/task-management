// src/tasks/task.repository.ts

import { EntityRepository, Repository, DataSource } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  constructor(private dataService: DataSource) {
    super(Task, dataService.createEntityManager());
  }
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.create(createTaskDto);
    return this.save(newTask);
  }

  async updateTask(
    id: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<Task | undefined> {
    const taskToUpdate = await this.findOne({ where: { id } });
    if (!taskToUpdate) {
      return undefined; // Task not found
    }

    this.merge(taskToUpdate, updateTaskDto);
    return this.save(taskToUpdate);
  }

  async deleteTask(id: number): Promise<boolean> {
    const taskToDelete = await this.findOne({ where: { id } });
    if (!taskToDelete) {
      return false;
    }

    await this.remove(taskToDelete);
    return true;
  }
}
