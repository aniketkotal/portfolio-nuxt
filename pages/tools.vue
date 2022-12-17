<template>
    <NuxtLayout name="page">
        <NuxtLayout name="section">
            <MainTitle>Tools</MainTitle>
            <MainParagraph>
                Here are a list of tools/apps/devices that I use on a daily. The frameworks/languages listed
                my skills.
            </MainParagraph>
        </NuxtLayout>
        <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
        <NuxtLayout name="page">
            <NuxtLayout name="section">
                <SectionTitle>Languages</SectionTitle>
                <SectionParagraph>
                    I have experience with the following languages though I'm not limited to these.
                </SectionParagraph>
            </NuxtLayout>
            <div class="grid grid-cols-3 gap-4">
                <LanguageItem v-for="(language, idx) in languages" :key="idx" :language="language"/>
            </div>
        </NuxtLayout>
    </NuxtLayout>
</template>

<script setup lang="ts">
const languages = [
    {
        name: "Nuxt.js",
        icon: "logos:nuxt-icon",
        url: "https://nuxtjs.org/"
    },
    {
        name: "Vue.js",
        icon: "logos:vue",
        url: "https://vuejs.org/"
    },
    {
        name: "Node.js",
        icon: "logos:nodejs-icon",
        url: "https://nodejs.org/"
    },
    {
        name: "GraphQL",
        icon: "logos:graphql",
        url: "https://graphql.org/"
    },
    {
        name: "TailwindCSS",
        icon: "logos:tailwindcss-icon",
        url: "https://tailwindcss.com/"
    },
    {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "JavaScript",
        icon: "logos:javascript",
        url: "https://www.javascript.com/"
    },
]
</script>