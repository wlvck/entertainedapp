<template>
  <div class="bg-black-100 px-4 mb-2">
    <div
      class="max-w-[900px] w-full mx-auto flex items-center gap-5 cursor-pointer py-6"
      @click="toggleAccordion = !toggleAccordion"
    >
      <icon
        name="icon:accordion-arrow"
        class="transition-all"
        :class="{ 'rotate-90': toggleAccordion }"
      />
      <div class="text-[20px] font-normal text-purple-100 uppercase">
        {{ title }}
      </div>
    </div>
  </div>
  <div
    class="text-white grid grid-rows-[0fr] transition-all duration-300"
    :class="{ 'grid-rows-[1fr]': toggleAccordion }"
  >
    <div class="overflow-hidden">
      <div class="bg-black-100">
        <div class="max-w-[900px] w-full mx-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();

const toggleAccordion = ref(false);
</script>
