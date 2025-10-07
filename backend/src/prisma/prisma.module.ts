// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 Biến thành global module → các module khác dùng được mà không cần import
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 export để các module khác dùng
})
export class PrismaModule {}
