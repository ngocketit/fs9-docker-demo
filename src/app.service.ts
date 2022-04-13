import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TodoDTO } from './todo.dto';
import TodoEntity from './todo.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async create(dto: TodoDTO) {
    const todo = new TodoEntity();
    todo.name = dto.name;
    todo.description = dto.description;
    todo.isDone = todo.isDone;
    return this.todoRepository.save(todo);
  }

  async findAll() {
    return this.todoRepository.find();
  }

  async delete(id: string) {
    return this.todoRepository.delete(id);
  }
}
