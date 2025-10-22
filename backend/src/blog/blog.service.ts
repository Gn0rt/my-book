import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.blog.findMany();
  }

  async findOne(id: string) {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  async create(createBlogDto: CreateBlogDto) {
    return this.prisma.blog.create({ data: createBlogDto });
  }

  async update(id: string, data: { title?: string; content?: string }) {
    return this.prisma.blog.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.blog.delete({ where: { id } });
  }
}
