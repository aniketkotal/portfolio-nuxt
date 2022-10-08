<template>
  <div class="flex flex-col gap-8">
    <img :src="TopImage" class="h-28 rounded-xl object-cover"/>
    <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I'm Aniket Kotal, an India based Vue.js developer/Student @ Parul
      University, with never-stopping love for learning new tech. I am
      specialising in Web Development with Vue.js, Express, MongoDB and Node.js.
      I am passionate about the Internet and how we can design beautiful looking
      interfaces with programming languages.
    </p>
    <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I'm currently working full-time for
      <LinkBtn link="https://www.trileotech.com">Trileotech</LinkBtn>,
      a cool web-development company. I am also developing a Discord Bot,
      <LinkBtn link="https://github.com/mightykillrr/hanako">Hanako</LinkBtn>,
      to help me with various tasks on my Discord Server.
      I am also learning GraphQL and UI/UX. Before this, I just
      used to create various Node.js web-apps/programs to fulfill my needs. It has helped me
      polish my web-development skills.
    </p>
    <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      I started learning about web-development in my early high-school, where I
      was introduced to HTML and CSS. I quickly started writing small webpages
      with simple HTML and little of CSS. After my high-school, I took some time
      to myself and explored the web development world more and found many
      frameworks. Out of all, I found my love for Vue.js. Since then, I've been
      mastering it, and with every new project I added a new tool, like
      TailwindCSS, Express and more.
    </p>
    <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      You can find my projects on my
      <LinkBtn link="https://github.com/mightykillrr">Github</LinkBtn>
      or on my
      <LinkBtn link="/">Portfolio</LinkBtn>
      page. I usually don't update my
      portfolio page but all my recent one's are on github.
    </p>
    <p
        class="text-sm md:text-base leading-relaxed slg:text-lg lg:leading-loose"
    >
      Outside of my work-life, I love to play Valorant and CS:GO, listening to
      Em. on Spotify, or just hanging out on Discord with my friends. You can
      follow along about my life on my
      <LinkBtn link="https://www.instagram.com/aniketkotal/">Instagram</LinkBtn>
      or
      <LinkBtn link="https://twitter.com/mightykillrr">Twitter</LinkBtn>. I
      post very rarely so you might not find many posts on either.
    </p>
    <p
        class="text-xs md:sm leading-relaxed slg:text-sm lg:leading-loose"
    >
      Credits to
      <LinkBtn link="https://www.pexels.com/@readymade">@readymade</LinkBtn>
      for header pic.
    </p>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6"/>
    <div class="flex flex-col gap-5">
      <h3 class="font-theme_bold text-head_text text-3xl">Work</h3>
      <div class="flex flex-col gap-8 py-4">
        <a
            v-for="work in works"
            :key="work.id"
            :href="work.link"
            class="flex flex-col gap-1 sm:flex-row flex-nowrap justify-between items-start sm:gap-6"
        >
          <span class="font-theme_bold text-head_text">{{ work.name }}</span>
          <span class="flex-[1_1_auto]"></span>
          <span class="sm:text-right text-sm sm:text-base">{{
              work.position
            }}</span>
          <span class="text-sm sm:text-base"
          >{{ work.from }} - {{ work.to }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useWorkStore} from "../store/workStore";
import TopImage from "../assets/imgs/about-image.jpg"

const workStore = useWorkStore();
const works = workStore.getAllWorks;
</script>
