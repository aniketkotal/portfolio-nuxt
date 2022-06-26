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
    <div class="px-52 pt-48 pb-24">
      <router-view></router-view>
    </div>
  </div>
</template>
