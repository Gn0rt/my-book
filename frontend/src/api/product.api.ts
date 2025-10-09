// src/api/product.api.ts
import apiClient from './client'

// Định nghĩa kiểu dữ liệu
export interface Product {
  id: string
  name: string
  description: string
  author: string
  price: number
  image: string
  genre: string
  stock: number
  publicationDate: string
  avgRating: number
}

export interface CreateProductDto {
  name: string
  description: string
  author: string
  publisher: string
  price: number
  image: string
  genre: string
  country: string
  publicationDate: string // "YYYY-MM-DD"
  stock: number
}

// Các hàm gọi API
export const productApi = {
  getAll() {
    return apiClient.get<Product[]>('/product')
  },

  getById(id: string) {
    return apiClient.get<Product>(`/product/${id}`)
  },

  create(data: CreateProductDto) {
    return apiClient.post<Product>('/product', data)
  },

  update(id: string, data: Partial<CreateProductDto>) {
    return apiClient.put<Product>(`/product/${id}`, data)
  },

  delete(id: string) {
    return apiClient.delete(`/product/${id}`)
  },
}
