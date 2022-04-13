import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoDTO } from './todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/todos')
  async createTodo(@Body() dto: TodoDTO) {
    return this.appService.create(dto);
  }

  @Get('/todos')
  async getAll() {
    return await this.appService.findAll();
  }

  @Delete('/todos/:id')
  async deleteOne(@Param('id') id: string) {
    this.appService.delete(id);
  }
}
