export class CreateProductDto {
  name: string;
  description: string;
  author: string;
  publisher: string;
  price: number;
  image: string;
  genre: string;
  country: string;
  publicationDate: string; // sẽ parse thành Date ở service nếu cần
  stock: number;
}
