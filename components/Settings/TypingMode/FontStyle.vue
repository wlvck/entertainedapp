<template>
  <div class="grid gap-2 grid-cols-6">
    <settings-toggle-button
      v-for="(font, index) in fonts"
      :key="index"
      :text="font.name"
      :is-active="font.name === activeValue.name"
      @on-click="activeValue = font"
    />
  </div>
</template>
<script setup lang="ts">
const fonts = [
  { name: "Courier Prime", category: "monospace" },
  { name: "DejaVu Mono", category: "monospace" },
  { name: "Dyslexic Mono", category: "monospace" },
  { name: "Fira Mono", category: "monospace" },
  { name: "JetBrains Mono", category: "monospace" },
  { name: "Noto Sans Mono", category: "monospace" },
  { name: "Recursive Casual", category: "monospace" },
  { name: "Recursive Linear", category: "monospace" },
  { name: "Roboto Mono", category: "monospace" },
  { name: "Source Code Pro", category: "monospace" },
  { name: "Ubuntu Mono", category: "monospace" },
  { name: "Victor Mono", category: "monospace" },

  { name: "Alegreya Sans", category: "sans-serif" },
  { name: "Arial", category: "sans-serif" },
  { name: "Atkinson Hyper", category: "sans-serif" },
  { name: "Comfortaa", category: "sans-serif" },
  { name: "Comic Neue", category: "sans-serif" },
  { name: "Geologica", category: "sans-serif" },
  { name: "Noto Sans", category: "sans-serif" },
  { name: "Open Dyslexic", category: "sans-serif" },
  { name: "Open Sans", category: "sans-serif" },
  { name: "Play", category: "sans-serif" },
  { name: "Ubuntu", category: "sans-serif" },
  { name: "Ysabeau", category: "sans-serif" },

  { name: "Alegreya", category: "serif" },
  { name: "DejaVu Serif", category: "serif" },
  { name: "EB Garamond", category: "serif" },
  { name: "Gentium Book", category: "serif" },
  { name: "Libre Baskerville", category: "serif" },
  { name: "Literata", category: "serif" },
  { name: "Noto Serif", category: "serif" },
  { name: "Piazzolla", category: "serif" },
  { name: "Roboto Slab", category: "serif" },
  { name: "Source Serif", category: "serif" },
  { name: "Times", category: "serif" },
  { name: "Vollkorn", category: "serif" },
];

const activeValue = ref({ name: "Recursive Casual", category: "monospace" });
</script>
