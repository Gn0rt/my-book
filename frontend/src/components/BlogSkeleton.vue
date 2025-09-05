<!-- components/BlogSkeleton.vue -->
<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <!-- Ảnh placeholder -->
    <div class="h-48 bg-gray-200 animate-pulse animate-shimmer"></div>

    <!-- Nội dung -->
    <div class="p-6 space-y-4">
      <!-- Tiêu đề -->
      <div class="h-6 bg-gray-200 rounded animate-pulse animate-shimmer"></div>

      <!-- Dòng mô tả -->
      <div class="space-y-2">
        <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div class="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
        <div class="h-4 bg-gray-200 rounded animate-pulse w-3/5"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-shimmer {
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}
</style>