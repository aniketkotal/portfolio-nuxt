<template>
  <a
      class="flex flex-col w-full p-6 py-6 lg:p-5 lg:py-8 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
  >
    <img
        :alt="tool.name"
        :src="tool.preview"
        class="w-full object-cover rounded-md slg:h-28"
    />
    <div class="flex flex-col justify-between gap-4 slg:gap-3">
      <span class="font-theme_bold text-lg text-head_text slg:text-xl">
        {{
          tool.name
        }}
      </span>
      <p class="text-sm md:text-base">
        {{ tool.description }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  tool: {
    name: string;
    description: string;
    preview: () => Promise<string>;
  }
}>()
</script>