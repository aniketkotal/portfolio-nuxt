<template>
  <a
    class="border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link"
    :href="link"
    ><slot></slot
  ></a>
</template>
<script>
export default {
  props: ["link"],
};
</script>
