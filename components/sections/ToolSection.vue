<template>
    <div class="flex flex-col gap-4 slg:gap-6">
        <NuxtLayout name="section">
            <SectionTitle>{{ stack.title }}</SectionTitle>
<!--            <SectionParagraph>-->
<!--                {{ stack.description }}-->
<!--            </SectionParagraph>-->
        </NuxtLayout>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 slg:grid-cols-4 slg:gap-3">
            <LanguageItem v-for="(language, idx) in stack.tools" :key="idx" :language="language"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Stack} from "~/types/typings";

defineProps<{ stack: Stack }>();
</script>