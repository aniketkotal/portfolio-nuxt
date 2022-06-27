<template>
  <div class="flex flex-col gap-6">
    <h1 class="font-theme_bold text-8xl">404</h1>
    <span class="leading-loose text-lg">
      The page you're looking for doesn't exist. Click below to head back to the
      safe and cozy home.
    </span>
    <ActionButton link="/">Go Home</ActionButton>
  </div>
</template>

<script>
import ActionButton from "../components/ui/ActionButton.vue";

export default {
  components: { ActionButton },
};
</script>
