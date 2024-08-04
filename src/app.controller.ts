import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AppService } from './app.service';
import { CreateTransactionDto } from "./dto/createTransaction.dto";
import { UpdateTransactionDto } from "./dto/updateTransaction.dto";

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/transaction')
  async createTransaction(@Body() data: CreateTransactionDto) {
    const transaction = await this.appService.createTransaction(data);
    return transaction;
  }

  @Get('/transactions')
  async getAllTransactions(){
    const transactions = await this.appService.getAllTransactions();
    return transactions;
  }

  @Get('/transactions/:title')
  async getTransactionByTitle(@Param('title') title: string) {
    const transaction = await this.appService.getTransactionByTitle(title);
    return transaction;
  }

  @Put('/transactions/:id')
  async updateTransaction(@Param('id') id: string, @Body() data: UpdateTransactionDto) {
    const transaction = await this.appService.updateTransaction(id, data);
    return transaction;
  }

  @Delete('/transactions/:id')
  async deleteTransaction(@Param('id') id: string) {
    const transaction = await this.appService.deleteTransaction(id);
    return transaction;
  }
}