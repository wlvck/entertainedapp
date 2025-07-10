<template>
  <div class="flex gap-2">
    <settings-toggle-button
      v-for="size in 10"
      :key="size"
      :text="size"
      :is-active="size === activeValue"
      @on-click="activeValue = size"
    />
  </div>
</template>
<script lang="ts" setup>
const activeValue = ref(1);
</script>
