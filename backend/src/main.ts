import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //cho phép frontend (localhost:5173, 3000...) gọi API
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const host = 'localhost';
  await app.listen(process.env.PORT ?? 3000);

  // 👇 In ra URL dễ nhìn
  console.log(`🚀 Server running on http://${host}:${port}`);
  console.log(`📚 API endpoints:`);
  console.log(`   - Users:    http://${host}:${port}/users`);
  console.log(`   - Products: http://${host}:${port}/products`);
  console.log(`   - Carts:    http://${host}:${port}/carts`);
}
bootstrap();
