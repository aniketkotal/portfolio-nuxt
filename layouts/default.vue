<template>
  <div class="w-full">
    <TheNavbar />
    <div
        class="max-w-screen-lg mt-16 mb-20 px-8 mx-auto pb-24 sm:mt-28 sm:px-16 slg:px-24 lg:mt-48 lg:mt-58"
    >
      <NuxtPage v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </NuxtPage>
    </div>
  </div>
</template>