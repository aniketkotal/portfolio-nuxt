<template>
    <div>
        <NuxtLayout name="tools">
            <MainTitle>Tools</MainTitle>
            <MainParagraph>
                Here are programming languages, frameworks, libraries, and tools that I use on a daily basis,
                and the apps I use to get things done.
            </MainParagraph>
            <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
            <NuxtLayout name="page">
                <SectionTitle>Stacks</SectionTitle>
                <ToolSection v-for="(stack, idx) in tools" :key="idx" :stack="stack"/>
            </NuxtLayout>
            <NuxtLayout name="page">
                <SectionTitle>Apps and Services</SectionTitle>
            </NuxtLayout>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import {Stack} from "~/types/typings";

const frontend: Stack = {
    title: "Frontend Stack",
    description: "I use the following tools to build my frontend projects.",
    tools: [
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
            name: "Tailwind CSS",
            icon: "logos:tailwindcss-icon",
            url: "https://tailwindcss.com/"
        },
        {
            name: "SASS",
            icon: "logos:sass",
            url: "https://sass-lang.com/"
        },
        {
            name: "Ant Design Vue",
            icon: "logos:ant-design",
            url: "https://antdv.com/"
        },
        {
            name: "Vuetify",
            icon: "logos:vuetifyjs",
            url: "https://vuetifyjs.com/en/"
        },
        {
            name: "Figma",
            icon: "logos:figma",
            url: "https://figma.com/"
        },
        {
            name: "HTML5",
            icon: "vscode-icons:file-type-html",
            url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        },
        {
            name: "CSS3",
            icon: "vscode-icons:file-type-css",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        }
    ]
}
const backend: Stack = {
    title: "Backend Stack",
    description: "I use the following tools to build my backend projects.",
    tools: [
        {
            name: "NestJS",
            icon: "logos:nestjs",
            url: "https://nestjs.com/"
        },
        {
            name: "Express",
            icon: "simple-icons:express",
            url: "https://expressjs.com/"
        },
        {
            name: "Node.js",
            icon: "logos:nodejs-icon",
            url: "https://nodejs.org/"
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
        {
            name: "GraphQL",
            icon: "logos:graphql",
            url: "https://graphql.org/"
        },
        {
            name: "Python",
            icon: "logos:python",
            url: "https://www.python.org/"
        },
    ]
}
const databases: Stack = {
    title: "Databases",
    description: "I use the following databases to store my data.",
    tools: [
        {
            name: "MongoDB",
            icon: "logos:mongodb-icon",
            url: "https://www.mongodb.com/"
        },
        {
            name: "PostgreSQL",
            icon: "logos:postgresql",
            url: "https://www.postgresql.org/"
        },
        {
            name: "SQLite",
            icon: "logos:sqlite",
            url: "https://www.sqlite.org/"
        },
    ]
}
const versionControl: Stack = {
    title: "Version Control",
    description: "I use the following tools to manage my code.",
    tools: [
        {
            name: "GitHub",
            icon: "mdi:github",
            url: "https://github.com",
            color: '#e6e6e6'
        },
        {
            name: "GitLab",
            icon: "logos:gitlab",
            url: "https://gitlab.com"
        },
    ]
}
const testing: Stack = {
    title: "Testing",
    description: "I use the following tools to test my code.",
    tools: [
        {
            name: "Vitest",
            icon: "logos:vitest",
            url: "https://vitest.dev/"
        },
        {
            name: "Cypress",
            icon: "vscode-icons:file-type-cypress",
            url: "https://www.cypress.io/"
        },
    ]
}
const codeEditors: Stack = {
    title: "Code Editors",
    description: "I use the following tools to write my code.",
    tools: [
        {
            name: "WebStorm",
            icon: "logos:webstorm",
            url: "https://www.jetbrains.com/webstorm/"
        },
        {
            name: "Idea",
            icon: "logos:intellij-idea",
            url: "https://www.jetbrains.com/idea/"
        },
        {
            name: "Atom",
            icon: "logos:atom-icon",
            url: "https://atom.io/"
        },
        {
            name: "VSCode",
            icon: "logos:visual-studio-code",
            url: "https://code.visualstudio.com/"
        },
        {
            name: "VSCode Insiders",
            icon: "vscode-icons:file-type-vscode-insiders",
            url: "https://code.visualstudio.com/insiders/"
        }
    ]
}
const tools: Array<Stack> = [frontend, backend, databases, versionControl, testing, codeEditors]
</script>