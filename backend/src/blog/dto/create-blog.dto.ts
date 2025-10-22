export class CreateBlogDto {
  title: string;
  author: string;
  content: string;
  excerpt: string;
  image?: string;
  published?: boolean;
}
