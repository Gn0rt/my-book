// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Xoá dữ liệu cũ (tuỳ chọn)
  await prisma.cart.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Tạo user mẫu
  const user1 = await prisma.user.create({
    data: {
      name: 'Nguyen Van A',
      email: 'user1@example.com',
      password: '123456', // ⚠️ thực tế phải hash
      address: 'Ha Noi',
      phone: '0909123456',
      role: 'USER',
    },
  });

  const admin = await prisma.user.create({
    data: {
      name: 'Admin MyBook',
      email: 'admin@mybook.com',
      password: 'admin123',
      role: 'ADMIN',
    },
  });

  // Tạo sách mẫu
  const book1 = await prisma.product.create({
    data: {
      name: 'Lập Trình Node.js Cho Người Mới Bắt Đầu',
      description:
        'Cuốn sách hướng dẫn toàn diện về Node.js và backend development.',
      author: 'Tran Van B',
      publisher: 'NXB Lập Trình',
      price: 120000,
      image: 'https://example.com/book1.jpg',
      genre: 'Lập trình',
      country: 'Việt Nam',
      publicationDate: new Date('2023-05-15'),
      stock: 25,
      avgRating: 4.5,
      totalReviews: 12,
    },
  });

  const book2 = await prisma.product.create({
    data: {
      name: 'JavaScript Đỉnh Cao',
      description: 'Nâng cao kỹ năng JS với các pattern hiện đại.',
      author: 'Le Thi C',
      publisher: 'NXB Kỹ Thuật',
      price: 150000,
      image: 'https://example.com/book2.jpg',
      genre: 'Lập trình',
      country: 'Việt Nam',
      publicationDate: new Date('2022-11-20'),
      stock: 10,
      avgRating: 4.8,
      totalReviews: 24,
    },
  });

  // Tạo giỏ hàng mẫu
  await prisma.cart.create({
    data: {
      userId: user1.id,
      productId: book1.id,
      price: 120000,
      count: 2,
      totalPrice: 240000,
    },
  });

  console.log('✅ Seed data thành công!');
  console.log('User:', user1.email);
  console.log('Books:', book1.name, book2.name);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
