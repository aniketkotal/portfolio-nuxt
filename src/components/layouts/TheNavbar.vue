<template>
  <nav
    class="bottom-0 px-3 py-3 flex justify-between items-center border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4"
  >
    <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
    <router-link
      to="/"
      class="font-logo text-3xl font-normal select-none slg:font-semibold lg:text-4xl"
      >Aniket</router-link
    >
    <div class="flex text-sm items-center gap-1 sm:gap-4">
      <router-link
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2 lg:text-base"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2 lg:text-base"
        to="/about"
      >
        About
      </router-link>
      <router-link
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2 lg:text-base"
        to="/projects"
      >
        Projects
      </router-link>
    </div>
  </nav>
</template>
