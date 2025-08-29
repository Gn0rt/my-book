<template>
  <div :class="cn('[perspective:1000px]', props.class)">
    <div
      :class="
        cn(
          'relative rounded-2xl transition-all duration-500 [transform-style:preserve-3d]',
          rotation[0],
        )
      "
    >
      <!-- Front -->
      <div
        class="absolute overflow-hidden rounded-2xl border bg-white [backface-visibility:hidden]"
      >
        <slot />
      </div>

      <!-- Back -->
      <div
        :class="
          cn(
            'absolute overflow-hidden rounded-2xl border bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]',
            rotation[1],
          )
        "
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { cn } from "@/lib/utils";
import { computed } from "vue";

const props = defineProps({
  rotate: { type: String, required: false, default: "y" },
  class: { type: String, required: false },
});
const rotationClass = {
  x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
  y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
};

const rotation = computed(() => rotationClass[props.rotate]);
</script>
