import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    const found = this.taskRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return found;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskRepository.updateTask(id, updateTaskDto);
  }

  async deleteTask(id: number): Promise<boolean> {
    return this.taskRepository.deleteTask(id);
  }
}
