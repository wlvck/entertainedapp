<template>
  <div class="flex gap-2">
    <settings-toggle-button
      v-for="variant in variants"
      :key="variant"
      :text="variant"
      :is-active="variant === activeValue"
      @on-click="activeValue = variant"
    />
  </div>
</template>
<script setup lang="ts">
const variants = ["Auto", "Min", "Mid", "Max"];
const activeValue = ref("Auto");
</script>
