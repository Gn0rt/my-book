import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.cartService.findByUser(userId);
  }

  @Post()
  create(
    @Body()
    body: {
      userId: string;
      productId: string;
      price: number;
      count: number;
    },
  ) {
    return this.cartService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
