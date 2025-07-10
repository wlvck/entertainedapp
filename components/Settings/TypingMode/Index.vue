<template>
  <settings-accordion-panel title="Typing mode">
    <settings-accordion-card title="Font size">
      <settings-typing-mode-font-size />
    </settings-accordion-card>
    <settings-accordion-card title="Line Height">
      <settings-typing-mode-line-height />
    </settings-accordion-card>
    <settings-accordion-card title="Line Width">
      <settings-typing-mode-line-width />
    </settings-accordion-card>
    <settings-accordion-card title="Font Style" :variant="'col'">
      <settings-typing-mode-font-style />
    </settings-accordion-card>
  </settings-accordion-panel>
</template>
