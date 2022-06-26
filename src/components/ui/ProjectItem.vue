<template>
  <a
    class="flex flex-col w-full p-6 items-center gap-6 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm slg:flex-row"
    :href="link"
  >
    <img
      class="w-full h-32 object-cover rounded-md slg:h-36"
      :src="image"
      :alt="name"
    />
    <div class="flex flex-col justify-between gap-4 slg:gap-5">
      <span class="font-theme_bold text-lg text-head_text slg:text-xl">{{
        name
      }}</span>
      <p class="text-sm slg:text-base">{{ description }}</p>
      <p class="text-sm slg:text-base">{{ tech.join(", ") }}</p>
    </div>
  </a>
</template>
<script>
export default {
  setup() {},
  props: ["name", "image", "description", "tech", "link"],
};
</script>
