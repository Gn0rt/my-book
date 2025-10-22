import apiClient from './client'
export interface Blog {
  id: string
  title: string
  author: string
  content: string
  excerpt: string
  image: string
  createdAt: string // ✅ ISO string từ backend
  updatedAt: string
}

export interface CreateBlogDto {
  title: string
  author: string
  content: string
  excerpt: string
  image?: string
  published: boolean
}

export const blogApi = {
  getAll() {
    return apiClient.get<Blog[]>('/blog')
  },
  getById(id: string) {
    return apiClient.get<Blog>(`/blog/${id}`)
  },
  create(data: CreateBlogDto) {
    return apiClient.post<Blog>('/blog', data)
  },
  update(id: string, data: Partial<CreateBlogDto>) {
    return apiClient.put<Blog>(`/blog/${id}`, data)
  },
  delete(id: string) {
    return apiClient.delete(`/blog/${id}`)
  },
}
