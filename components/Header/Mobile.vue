<template>
  <div class="bg-black-100 p-4 sticky top-0 left-0 w-full">
    <router-link :to="{ name: 'home' }" class="flex items-center gap-1">
      <icon name="icon:app-logo" size="35" />
      <div>
        <div
          class="text-purple-100 tracking-[2px] font-normal uppercase recursive-font text-[10px] leading-[10px]"
        >
          Oynap üyren
        </div>
        <div
          class="recursive-font !text-[15px] leading-[15px] font-normal uppercase tracking-[2px]"
        >
          <span class="text-blue-100">Qazaq</span
          ><span class="text-green-100">Type</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
