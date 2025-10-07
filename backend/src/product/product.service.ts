import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async create(createProductDto: CreateProductDto) {
    const data: any = { ...createProductDto };
    if (data.publicationDate) {
      data.publicationDate = new Date(data.publicationDate);
    }
    return this.prisma.product.create({
      data: {
        ...data,
        avgRating: 0,
        totalReviews: 0,
        viewCount: 0,
        sales: 0,
        dateUpdate: new Date(),
      },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const data: any = { ...updateProductDto };

    // Chỉ convert nếu publicationDate được gửi lên
    if (data.publicationDate !== undefined) {
      data.publicationDate = new Date(data.publicationDate);
    }

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }
  async remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
