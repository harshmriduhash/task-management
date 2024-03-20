// src/users/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto); // Create a new User entity
    return this.userRepository.save(newUser);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | undefined> {
    const userToUpdate = await this.userRepository.findOne({ where: { id } });
    if (!userToUpdate) {
      return undefined; // User not found
    }

    this.userRepository.merge(userToUpdate, updateUserDto); // Merge the changes
    return this.userRepository.save(userToUpdate);
  }

  async deleteUser(id: number): Promise<boolean> {
    const userToDelete = await this.userRepository.findOne({ where: { id } });
    if (!userToDelete) {
      return false; // User not found
    }

    await this.userRepository.remove(userToDelete); // Remove the user
    return true; // User successfully deleted
  }
}
