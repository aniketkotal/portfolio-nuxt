<template>
  <div>
    <NuxtLayout name="page">
      <MainTitle>Daily Tools</MainTitle>
      <MainParagraph>
        Here are some of the tools I use daily. I've tried to include as many as I can remember.
        These are probably not useful for you, but I'm sure you'll find something useful here.
      </MainParagraph>
    </NuxtLayout>
    <div
        class="grid grid-cols-1 slg:grid-cols-3 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
    >
      <ToolItem
          v-for="(tool, i) in tools"
          :key="i"
          :tool="tool"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const featured = import.meta.glob("../../assets/tools/*.{png,jpg}", {as: 'url', eager: true})
const tools = [
  {
    name: "Change Case",
    description: "A simple tool to change the case of your text, with some extra features.",
    preview: featured["../../assets/tools/change_case.png"],
  },
]
</script>