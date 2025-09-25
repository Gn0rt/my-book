<script setup></script>
<template>
    <div class="hidden sm:block p-6">
        <table class="table-auto w-full border-collapse rounded-xl shadow-md overflow-hidden">
            <thead class="bg-gray-100 text-gray-700 text-center">
                <tr>
                    <th class="px-4 py-3 border-b">Tên SP</th>
                    <th class="px-4 py-3 border-b">Giá</th>
                    <th class="px-4 py-3 border-b">Số lượng</th>
                    <th class="px-4 py-3 border-b">Thành tiền</th>
                    <th class="px-4 py-3 border-b"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td class="px-4 py-3 text-center">100.000 VND</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">200.000</td>
                    <td class="px-4 py-3 text-center">
                    <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                        Xoá
                    </button>
                    </td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td class="px-4 py-3 text-center">100.000 VND</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">200.000</td>
                    <td class="px-4 py-3 text-center">
                    <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                        Xoá
                    </button>
                    </td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td class="px-4 py-3 text-center">100.000 VND</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">200.000</td>
                    <td class="px-4 py-3 text-center">
                    <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                        Xoá
                    </button>
                    </td>
                </tr>

            </tbody>
            <tfoot>
                <tr class="bg-gray-50 font-semibold">
                    <td colspan="3" class="px-4 py-3 text-right">Tổng cộng:</td>
                    <td class="px-4 py-3">600.000 VND</td>
                    <td></td>
                </tr>
            </tfoot>
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

    <!-- Mobile (hiện card) -->
    <div class="block sm:hidden space-y-4 p-4">
        <div class="p-4 bg-white rounded-xl shadow-md space-y-2">
            <div><span class="font-medium">Tên SP:</span> The Sliding Mr. Bones</div>
            <div><span class="font-medium">Giá:</span> 100.000 VND</div>
            <div><span class="font-medium">Số lượng:</span> 2</div>
            <div><span class="font-medium">Thành tiền:</span> 200.000</div>
            <div class="text-right">
            <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                Xoá
            </button>
            </div>
        </div>

        <div class="p-4 bg-white rounded-xl shadow-md space-y-2">
            <div><span class="font-medium">Tên SP:</span> The Sliding Mr. Bones</div>
            <div><span class="font-medium">Giá:</span> 100.000 VND</div>
            <div><span class="font-medium">Số lượng:</span> 2</div>
            <div><span class="font-medium">Thành tiền:</span> 200.000</div>
            <div class="text-right">
            <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                Xoá
            </button>
            </div>
        </div>

        <div class="p-4 bg-white rounded-xl shadow-md space-y-2">
            <div><span class="font-medium">Tên SP:</span> The Sliding Mr. Bones</div>
            <div><span class="font-medium">Giá:</span> 100.000 VND</div>
            <div><span class="font-medium">Số lượng:</span> 2</div>
            <div><span class="font-medium">Thành tiền:</span> 200.000</div>
            <div class="text-right">
            <button class="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                Xoá
            </button>
            </div>
        </div>

        <!-- card tổng cộng -->
        <div class="p-4 bg-gray-100 rounded-xl shadow-inner text-right font-semibold">
            Tổng cộng: 600.000 VND
        </div>

        <!-- Buttons -->
        <div class="flex flex-col gap-3">
            <button class="w-full px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Thanh toán trực tuyến
            </button>
            <button class="w-full px-5 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                Thanh toán khi nhận hàng
            </button>
        </div>
    </div>

</template>