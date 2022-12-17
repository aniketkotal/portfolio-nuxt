<template>
    <div
        class="
    flex flex-col items-center h-52 gap-6 bg-action_back border-action_border
     border-2 px-5 py-4 rounded-md justify-center cursor-pointer hover:bg-action_border
     transition-colors hover:border-action_text
            "
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
    >
        <Icon :icon="icon" class="text-6xl rounded-sm"/>
        <span v-if="isHovering" class="text-action_text">{{ name }}</span>
    </div>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";

type Language = {
    name: string;
    icon: string;
    url: string;
}
const isHovering = ref(false);
const props = defineProps<{ language: Language }>();
const {name, icon, url} = props.language;
</script>