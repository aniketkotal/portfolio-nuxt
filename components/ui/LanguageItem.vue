<template>
    <a
        :href="url"
        target="_blank"
        v-auto-animate
        class="
            flex items-center gap-5  justify-start
            bg-item_back border-border_sm border-[1px] px-3 py-4 hover:bg-item_hover_back
            transition-colors hover:border-action_border
            rounded-md cursor-pointer
            slg:flex-col slg:justify-center slg:py-10 slg:h-36 lg:h-44
        "
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
    >
        <Icon :icon="icon" :style="{
            color,
        }" class="
        text-2xl rounded-sm w-9
         slg:text-4xl slg:w-14
         lg:text-5xl lg:w-16
"
        />
        <ClientOnly>
            <span v-if="showName" class="text-action_text text-sm font-light">{{ name }}</span>
        </ClientOnly>
    </a>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {Language} from "~/types/typings";
import {onMounted, ref} from "vue";

const isHovering = ref(false);
const showName = computed(() => {
    if (window.innerWidth < 850) return true;
    return isHovering.value
});
const props = defineProps<{ language: Language }>();
const {name, icon, url, color} = props.language;

const onMouseEnter = () => (isHovering.value = true);
const onMouseLeave = () => (isHovering.value = false);
</script>