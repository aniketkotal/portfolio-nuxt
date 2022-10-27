<template>
  <Transition
      mode="in-out"
      name="page"
  >
    <div v-if="!cookieStatus"
         class="max-w-screen-slg w-11/12 md:w-10/12 fixed bottom-20 sm:bottom-9 rounded-md bg-navbar_back backdrop-blur-sm px-6 py-4 z-50 border-[1px] border-border_sm">
      <div class="flex justify-between items-center">
        <SectionParagraph>This website uses Google Analytics to collect anonymous information.
          <LinkBtn link="/policies" text="Learn more"/>
        </SectionParagraph>
        <Icon class="text-5xl sm:text-2xl cursor-pointer" icon="akar-icons:check-box" @click="handleClick"/>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import {defineNuxtPlugin, onMounted, useRouter, watch} from "#imports";
import {ref} from "vue";
import VueGtag, {trackRouter, useState} from 'vue-gtag-next';

const cookieStatus = ref<false | string>(false);
const handleClick = () => {
  cookieStatus.value = "true";
  localStorage.setItem("did_they_love_cookies", "they_did!");
};
onMounted(() => {
  cookieStatus.value = localStorage.getItem("did_they_love_cookies");
})

defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: process.env.GOOGLE_ANALYTICS_ID,
      isEnabled: false,
    }
  })
})

const router = useRouter();
trackRouter(router);
watch(cookieStatus, (cur) => {
  if (!cur) return;
  const {isEnabled} = useState()
  isEnabled.value = true;
  console.log("Google Analytics is enabled.");
})

</script>