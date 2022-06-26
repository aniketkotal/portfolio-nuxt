<template>
  <div class="flex flex-col items-center gap-12">
    <img :src="image" :alt="name" class="rounded-lg w-full" />
    <div class="flex flex-col w-5/6 items-left gap-6">
      <span class="font-theme_bold text-2xl text-head_text">{{ name }}</span>
      <p class="text-sm lg:text-lg">{{ description }}</p>
      <ActionButton class="w-fit" :link="link">
        {{ returnDomain(link) }}
        <Icon class="inline text-xl" icon="ep:top-right" color="#eaeaea" />
      </ActionButton>
    </div>
  </div>
</template>
<script>
import ActionButton from "./ActionButton.vue";

export default {
  setup() {
    function returnDomain(domain) {
      const matches = domain.match(
        /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g
      );

      return matches[0];
    }

    return { returnDomain };
  },
  props: ["name", "image", "description", "tech", "link"],
  components: { ActionButton },
};
</script>
