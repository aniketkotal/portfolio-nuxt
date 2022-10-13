<template>
  <Transition
      mode="in-out"
      name="page"
  >
    <div v-if="!cookieStatus"
         class="max-w-screen-slg w-11/12 md:w-10/12 fixed bottom-20 sm:bottom-9 rounded-md bg-navbar_back backdrop-blur-sm px-6 py-4 z-50 border-[1px] border-border_sm">
      <div class="flex justify-between items-center">
        <SectionParagraph>By using this website, you're accepting our
          <LinkBtn link="/policies" text="cookie policy"/>
          !
        </SectionParagraph>
        <Icon class="text-5xl sm:text-2xl cursor-pointer" icon="charm:cross" @click="handleClick"/>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import {onMounted} from "#imports";
import {ref} from "vue";

const cookieStatus = ref<false | string>("true");
const handleClick = () => {
  cookieStatus.value = "true";
  localStorage.setItem("did_they_love_cookies", "they_did!");
};
onMounted(() => {
  cookieStatus.value = localStorage.getItem("did_they_love_cookies");
})
</script>