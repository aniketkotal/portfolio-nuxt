<template>
  <a
    class="flex w-full py-7 px-6 items-center gap-6 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
    :href="link"
  >
    <img class="w-52 h-32 object-cover rounded-md" :src="image" :alt="name" />
    <div class="flex flex-col justify-between gap-4">
      <span class="font-theme_bold text-xl text-head_text">{{ name }}</span>
      <p>{{ description }}</p>
      <p>{{ tech.join(", ") }}</p>
    </div>
  </a>
</template>
<script>
export default {
  setup() {},
  props: ["name", "image", "description", "tech", "link"],
};
</script>
