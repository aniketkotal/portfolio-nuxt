<template>
  <div>
    <NuxtLayout name="page">
      <img :src="TopImage" class="w-full h-28 rounded-xl object-cover"/>
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
          My name is Panji Maulana Buckriawan, I’m a 22 years old male and a fresh graduate with bachelors degree in information systems who is familiar with system development and graphic design. I’m a creative and an organized person who likes to get job done efficiently and in best way possible, good at analysis and able to work and communicate well with a team on a project.
        </SectionParagraph>
      </div>
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
import TopImage from "../assets/imgs/about-image.jpg"

const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
