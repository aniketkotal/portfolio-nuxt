<template>
    <NuxtLayout name="default">
        <MainTitle>
            {{ title }}
        </MainTitle>
        <MainParagraph>
            {{ date }}
        </MainParagraph>
    </NuxtLayout>
</template>

<script setup lang="ts">
defineProps<{ title: string; date: string }>()
</script>