import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [UserModule, ProductModule, CartModule, PrismaModule, BlogModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
