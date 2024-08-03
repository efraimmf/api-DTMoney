import { Injectable } from '@nestjs/common';
import { PrismaService } from "./prisma.service";
import { CreateTransactionDto } from "./dto/createTransaction.dto";

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

    async createTransaction(data: CreateTransactionDto){
      const createdTransaction = await this.prismaService.transaction.create({data})
      return createdTransaction;
    }
}
