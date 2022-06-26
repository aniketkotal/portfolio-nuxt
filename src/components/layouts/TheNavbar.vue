<template>
  <!-- before:absolute before:-top-1 before:left-0 before:w-full before:h-1 before:bg-topbar -->
  <nav
    class="flex justify-between items-center py-4 px-6 border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm"
  >
    <div class="absolute -top-1 left-0 w-full h-2 bg-topbar"></div>
    <router-link to="/" class="font-logo text-3xl font-bold select-none"
      >Aniket</router-link
    >
    <div class="flex gap-1 text-sm items-center">
      <router-link
        class="hover:bg-action_back font-theme_bold px-6 py-1 pb-2 rounded-md transition-all"
        to="/home"
      >
        Home
      </router-link>
      <router-link
        class="hover:bg-action_back px-6 py-1 pb-2 rounded-md transition-all"
        to="/about"
      >
        About
      </router-link>
      <router-link
        class="hover:bg-action_back px-6 py-1 pb-2 rounded-md transition-all"
        to="/projects"
      >
        Projects
      </router-link>
      <router-link
        class="hover:bg-action_back px-6 py-1 pb-2 rounded-md transition-all"
        to="/tools"
      >
        Tools
      </router-link>
    </div>
  </nav>
</template>
