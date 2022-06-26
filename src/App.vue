<script>
import TheNavbar from "./components/layouts/TheNavbar.vue";
import { RouterLink, RouterView } from "vue-router";

export default {
  setup() {},
  components: { TheNavbar },
};
</script>

<template>
  <div class="w-full">
    <TheNavbar />
    <div
      class="max-w-screen-lg mt-16 px-8 mx-auto pb-24 sm:mt-28 sm:px-16 slg:px-24 lg:mt-48"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
