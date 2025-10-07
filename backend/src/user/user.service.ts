import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async create(data: { name: string; email: string; password: string }) {
    // ⚠️ Trong thực tế: hash password bằng bcrypt
    return this.prisma.user.create({ data });
  }
}
