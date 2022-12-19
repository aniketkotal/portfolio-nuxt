<template>
    <div>
        <NuxtLayout name="page">
            <AboutMe/>
            <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
            <div class="flex flex-col gap-5">
                <SectionTitle>Work</SectionTitle>
                <NuxtLayout name="section">
                    <WorkListItem v-for="work in works" :key="work.id" :work="work"/>
                </NuxtLayout>
            </div>
        </NuxtLayout>
    </div>
</template>
<script setup>
import {useWorkStore} from "../store/workStore";

const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
