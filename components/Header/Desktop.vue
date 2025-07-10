<template>
  <div class="bg-primary-black p-4">
    <div class="max-w-[1200px] w-full mx-auto grid grid-cols-3">
      <router-link :to="{ name: 'home' }" class="flex items-center gap-1">
        <icon name="icon:app-logo" size="56" />
        <div>
          <div
            class="text-primary-purple tracking-[2px] font-normal uppercase recursive-font"
          >
            Oynap üyren
          </div>
          <div
            class="recursive-font text-[20px] font-normal uppercase tracking-[2px]"
          >
            <span class="text-primary-blue">Qazaq</span
            ><span class="text-primary-green">Type</span>
          </div>
        </div>
      </router-link>
      <div class="flex items-center justify-center gap-5 nav">
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center gap-2 transition-all duration-200"
        >
          <icon name="icon:home" />
          <span class="text-primary-purple">Basty bet</span>
        </router-link>
        <router-link
          :to="{ name: 'books' }"
          class="flex items-center gap-2 transition-all duration-200"
        >
          <icon name="icon:books" />
          <span class="text-primary-purple">Kitaptar</span>
        </router-link>
        <router-link
          :to="{ name: 'statistics' }"
          class="flex items-center gap-2 transition-all duration-200"
        >
          <icon name="icon:statistics" />
          <span class="text-primary-purple">Statistika</span>
        </router-link>
      </div>
      <div class="flex items-center justify-end">
        <icon
          name="icon:settings"
          class="hover:rotate-90 cursor-pointer transition-all duration-200"
        />
      </div>
    </div>
  </div>
</template>

<style>
.nav .router-link-active span {
  color: var(--color-primary-green);
}
.nav .router-link-active svg g path {
  fill: var(--color-primary-green);
}
</style>
