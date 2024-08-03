import { Body, Controller, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { CreateTransactionDto } from "./dto/createTransaction.dto";

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/transaction')
  async createTransaction(@Body() data: CreateTransactionDto) {
    const transaction = await this.appService.createTransaction(data);
    return transaction;
  }
}
