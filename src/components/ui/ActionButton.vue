<template>
  <a
    class="bg-btn_back border-[1px] border-link_border px-5 py-2 rounded-md font-theme_bold text-btn_text hover:bg-border_sm transition-colors"
    :href="link"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: ["link"],
  setup() {},
};
</script>
