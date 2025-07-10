<template>
  <div
    class="min-w-[40px] px-4 py-2 h-[35px] cursor-pointer transition-all font-normal text-purple-100 duration-200 border-[1.4px] border-black-200 grid place-content-center bg-gray-100 rounded-[4px]"
    :class="{
      'border-green-100 !text-green-100 bg-green-200': isActive,
    }"
    @click="$emit('onClick')"
  >
    <span> {{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string | number; isActive: boolean }>();
defineEmits(["onClick"]);
</script>
