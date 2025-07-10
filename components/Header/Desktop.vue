<template>
  <div
    class="bg-black-100 p-4 border-b-black-200 border-b-[4px] sticky top-0 left-0 w-full"
  >
    <div
      class="set-max-width grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-4"
    >
      <router-link :to="{ name: 'home' }" class="flex items-center gap-1">
        <icon name="icon:app-logo" size="56" />
        <div>
          <div
            class="text-purple-100 tracking-[2px] font-normal uppercase recursive-font text-[12px]"
          >
            Oynap üyren
          </div>
          <div
            class="recursive-font !text-[20px] font-normal uppercase tracking-[2px]"
          >
            <span class="text-blue-100">Qazaq</span
            ><span class="text-green-100">Type</span>
          </div>
        </div>
      </router-link>
      <div
        class="flex items-center justify-center gap-5 nav lg:col-span-1 md:col-span-2 sm:col-span-2"
      >
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center gap-2 transition-all duration-200"
        >
          <icon name="icon:home" />
          <span class="text-purple-100">Basty bet</span>
        </router-link>
        <router-link
          :to="{ name: 'books' }"
          class="flex items-center gap-2 transition-all duration-200"
        >
          <icon name="icon:books" />
          <span class="text-purple-100">Kitaptar</span>
        </router-link>
        <router-link
          :to="{ name: 'statistics' }"
          class="flex items-center gap-2 transition-all duration-200"
        >
          <icon name="icon:statistics" />
          <span class="text-purple-100">Statistika</span>
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
  color: var(--color-green-100);
}
.nav .router-link-active svg g path {
  fill: var(--color-green-100);
}
</style>
