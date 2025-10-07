<script setup>
</script>

<template>
        <div class="p-6">
        <table class="table-auto w-full border-collapse rounded-xl shadow-md overflow-hidden">
            <thead class="bg-gray-100 text-gray-700 text-center">
                <tr>
                    <th class="px-4 py-3 border-b">Tên user</th>
                    <th class="px-4 py-3 border-b">Email</th>
                    <th class="px-4 py-3 border-b">SDT</th>
                    <th class="px-4 py-3 border-b">Role</th>
                    <th class="px-4 py-3 border-b"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-3">Mr. Bones</td>
                    <td class="px-4 py-3 text-center">sbc@gmail.com</td>
                    <td class="px-4 py-3 text-center">0123456789</td>
                    <td class="px-4 py-3 text-center">User</td>
                    <td class="px-4 py-3 text-center">
                    <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                        Xoá
                    </button>
                    </td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-3">Mr. Beats</td>
                    <td class="px-4 py-3 text-center">beats@gmail.com</td>
                    <td class="px-4 py-3 text-center">0123444759</td>
                    <td class="px-4 py-3 text-center">User</td>
                    <td class="px-4 py-3 text-center">
                    <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                        Xoá
                    </button>
                    </td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-3">Mr. Helia</td>
                    <td class="px-4 py-3 text-center">helia@gmail.com</td>
                    <td class="px-4 py-3 text-center">0234563789</td>
                    <td class="px-4 py-3 text-center">User</td>
                    <td class="px-4 py-3 text-center">
                    <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                        Xoá
                    </button>
                    </td>
                </tr>

            </tbody>
        </table>
        <!-- Buttons -->
        <div class="flex justify-end gap-3 mt-4">
            <button class="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Thanh toán trực tuyến
            </button>
            <button class="px-5 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                Thanh toán khi nhận hàng
            </button>
        </div>
    </div>
</template>