import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async findByUser(userId: string) {
    return this.prisma.cart.findMany({ where: { userId } });
  }

  async create(data: {
    userId: string;
    productId: string;
    price: number;
    count: number;
  }) {
    const totalPrice = data.price * data.count;
    return this.prisma.cart.create({
      data: { ...data, totalPrice },
    });
  }

  async remove(id: string) {
    return this.prisma.cart.delete({ where: { id } });
  }
}
