<template>
  <div
    class="flex justify-between gap-5 border-b-[1.5px] border-black-200 py-6"
    :class="{
      'border-none': removeBorder,
      'flex-row items-center': variant === 'row',
      'flex-col': variant === 'col',
    }"
  >
    <div class="text-[16px] text-purple-100 capitalize">
      {{ title }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    removeBorder?: boolean;
    title: string;
    variant?: "row" | "col";
  }>(),
  {
    variant: "row",
  }
);
</script>
