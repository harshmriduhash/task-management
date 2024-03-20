// src/users/user.repository.ts

import { Repository, EntityRepository, DataSource } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor(private dataService: DataSource) {
    super(User, dataService.createEntityManager());
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.create(createUserDto); // Create a new User entity
    return this.save(newUser);
  }

  async updateUser(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | undefined> {
    const userToUpdate = await this.findOne({ where: { id } });
    if (!userToUpdate) {
      return undefined; // User not found
    }

    this.merge(userToUpdate, updateUserDto); // Merge the changes
    return this.save(userToUpdate); // Save the updated user
  }

  async deleteUser(id: number): Promise<boolean> {
    const userToDelete = await this.findOne({ where: { id } });
    if (!userToDelete) {
      return false; // User not found
    }

    await this.remove(userToDelete); // Remove the user
    return true; // User successfully deleted
  }

  // async validateUserPassword(
  //   authCredentialsDto: AuthCredentialsDto,
  // ): Promise<Pick<User, 'username'>> {
  //   const user = await this.findOne({
  //     where: { username: authCredentialsDto.username },
  //   });
  //   if (!user) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }
  //   const isMatch = await user.validatePassword(authCredentialsDto.password);
  //   if (!isMatch) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   return user;
  // }
}
