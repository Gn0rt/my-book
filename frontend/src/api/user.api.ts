import apiClient from './client'
export interface User {
  id: string
  name: string
  email: string
  address?: string
  phone?: string
  role: 'USER' | 'ADMIN'
  createdAt: string
  updatedAt: string
}

export interface CreateUserDto {
  name: string
  email: string
  password: string
  address?: string
  phone?: string
  role: 'USER'
}

export interface LoginDto {
  email: string
  password: string
}

export const userApi = {
  getAll() {
    return apiClient.get<User[]>('/user')
  },

  getById(id: string) {
    return apiClient.get<User>(`/user/${id}`)
  },

  create(data: CreateUserDto) {
    return apiClient.post<User>('/user', data)
  },
  login(credentials: LoginDto) {
    return apiClient.post<User>('/user/login', credentials)
  },
}
