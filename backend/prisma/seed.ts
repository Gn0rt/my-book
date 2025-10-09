// prisma/seed.ts
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();
const sampleBooks = Array.from({ length: 25 }, (_, i) => {
  const titles = [
    'Node.js',
    'React',
    'Vue',
    'TypeScript',
    'NestJS',
    'MongoDB',
    'Prisma',
    'Docker',
    'AWS',
    'Git',
    'GraphQL',
    'Redis',
    'PostgreSQL',
    'Linux',
    'Python',
    'Rust',
    'Go',
    'Kubernetes',
    'CI/CD',
    'Terraform',
    'Next.js',
    'Express',
    'JWT',
    'OAuth2',
    'Testing',
  ];
  const authors = [
    'Nguyen Van A',
    'Tran Thi B',
    'Le Van C',
    'Pham Thi D',
    'Hoang Van E',
  ];
  const genres = [
    'Lập trình',
    'Web',
    'Mobile',
    'DevOps',
    'Database',
    'AI',
    'Mạng',
    'Bảo mật',
  ];
  const images = [
    'https://plus.unsplash.com/premium_photo-1682255271649-866ebf8873d1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1672223570360-c03a91b114cc?q=80&w=1060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1715107534944-66a006ef57c7?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1734717941936-e9a07ef8371c?q=80&w=1007&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503467431153-c403061ea50d?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const title = titles[i % titles.length];
  const author = authors[i % authors.length];
  const genre = genres[i % genres.length];
  const image = images[i % images.length];

  return {
    name: `${title} Toàn Tập - Tập ${Math.floor(i / 5) + 1}`,
    description: `Hướng dẫn chi tiết về ${title} cho developer.`,
    author,
    publisher: 'NXB Công Nghệ',
    price: 95000 + i * 3000,
    image,
    genre, // ✅ string
    country: 'Việt Nam',
    // Tháng: 0 = Jan, 11 = Dec
    publicationDate: new Date(2020 + (i % 5), i % 12, 1),
    stock: 10 + i,
  };
});

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
  const createdBooks: Product[] = [];
  for (const bookData of sampleBooks) {
    const book = await prisma.product.create({ data: bookData });
    createdBooks.push(book);
  }

  // Tạo giỏ hàng mẫu
  // 🛒 Tạo giỏ hàng mẫu
  if (createdBooks.length > 0) {
    await prisma.cart.create({
      data: {
        userId: user1.id,
        productId: createdBooks[0].id,
        price: createdBooks[0].price,
        count: 1,
        totalPrice: createdBooks[0].price,
      },
    });
  }

  console.log('✅ Seed data thành công!');
  console.log('User:', user1.email);
  console.log('Books:', createdBooks[0].name, createdBooks[1].name);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
