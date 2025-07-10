<template>
  <div class="min-h-[100vh] flex flex-col relative">
    <Header />
    <main class="flex-[1_1_auto]">
      <slot />
    </main>
    <Footer />
  </div>
</template>
