<script setup lang="ts">
import { User } from '../api/user.api';

const props = defineProps<{
  user: User;
}>();

// const props = defineProps({
//   type: Object as () => User
// })
</script>
<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div class="px-6 py-5 border-b border-gray-200">
        <h2 class="text-xl font-semibold text-gray-800">Thông tin cá nhân</h2>
        <p class="text-sm text-gray-500 mt-1">Cập nhật thông tin tài khoản của bạn</p>
      </div>

      <form class="px-6 py-6 space-y-5">
        <!-- Tên -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <label for="name" class="block text-sm font-medium text-gray-700">Tên</label>
          <div class="sm:col-span-2">
            <input
              type="text"
              id="name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Nhập họ và tên"
              :value="user.name"
            />
          </div>
        </div>

        <!-- Email -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <div class="sm:col-span-2">
            <input
              type="email"
              id="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="example@email.com"
              :value="user.email"
            />
          </div>
        </div>

        <!-- Mật khẩu -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <label for="password" class="block text-sm font-medium text-gray-700">Mật khẩu</label>
          <div class="sm:col-span-2">
            <input
              type="password"
              id="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="••••••••"
            />
          </div>
        </div>

        <!-- Địa chỉ -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <label for="address" class="block text-sm font-medium text-gray-700">Địa chỉ</label>
          <div class="sm:col-span-2">
            <input
              type="text"
              id="address"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Số nhà, đường, quận, thành phố"
              :value="(user.address !== null) ? user.address : '' "
            />
          </div>
        </div>

        <!-- Số điện thoại -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <label for="phone" class="block text-sm font-medium text-gray-700">Số điện thoại</label>
          <div class="sm:col-span-2">
            <input
              type="tel"
              id="phone"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="0123 456 789"
              :value="(user.phone !== null) ? user.phone : '' "
            />
          </div>
        </div>

        <!-- Ngày tạo (chỉ đọc) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <label for="createdAt" class="block text-sm font-medium text-gray-700">Ngày tạo</label>
          <div class="sm:col-span-2">
            <input
              type="text"
              id="createdAt"
              value="12/04/2025"
              readonly
              class="w-full px-4 py-2 bg-gray-100 text-gray-500 border border-gray-300 rounded-lg cursor-not-allowed"
            />
          </div>
        </div>

        <!-- Nút lưu -->
        <div class="pt-4 flex justify-end">
          <button
            type="submit"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition shadow-sm"
          >
            Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  </div>
</template>