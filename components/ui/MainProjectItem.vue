<template>
  <div class="flex flex-col items-center gap-8">
    <img :alt="name" :src="image" class="rounded-lg w-full"/>
    <div class="flex flex-col md:w-5/6 items-left gap-6">
      <span class="font-theme_bold text-2xl text-head_text">{{ name }}</span>
      <p class="text-sm lg:text-lg">{{ description }}</p>
      <ActionButton :link="link" class="w-fit">
        {{ returnDomain(link) }}
        <Icon class="inline text-xl" color="#eaeaea" icon="ep:top-right"/>
      </ActionButton>
    </div>
  </div>
</template>
<script setup>
import {Icon} from "@iconify/vue";

const returnDomain = (domain) => domain.match(
    /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
).pop();

defineProps(["name", "image", "description", "tech", "link"])
</script>
