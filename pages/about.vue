<template>
  <div>
    <NuxtLayout name="page">
      <img :src="TopImage" class="w-full h-28 rounded-xl object-cover"/>
      <div class="flex flex-col gap-6 lg:gap-9 mx-auto w-full md:w-10/12">
        <SectionParagraph>
          I'm Aniket Kotal, an India based Vue.js developer/Student @ Parul
          University, with never-stopping love for learning new tech. I am
          specialising in Web Development with Vue.js, Express, MongoDB and Node.js.
          I am passionate about the Internet and how we can design beautiful looking
          interfaces with programming languages.
        </SectionParagraph>
        <SectionParagraph>
          I'm currently working full-time for
          <LinkBtn link="https://www.trileotech.com" text="Trileotech"/>
          ,
          a cool web-development company. I am also developing a Discord Bot,
          <LinkBtn link="https://github.com/mightykillrr/hanako" text="Hanako"/>
          to help me with various tasks on my Discord Server.
          I am also learning GraphQL and UI/UX. Before this, I just
          used to create various Node.js web-apps/programs to fulfill my needs. It has helped me
          polish my web-development skills.
        </SectionParagraph>
        <SectionParagraph>
          I started learning about web-development in my early high-school, where I
          was introduced to HTML and CSS. I quickly started writing small webpages
          with simple HTML and little of CSS. After my high-school, I took some time
          to myself and explored the web development world more and found many
          frameworks. Out of all, I found my love for Vue.js. Since then, I've been
          mastering it, and with every new project I added a new tool, like
          TailwindCSS, Express and more.
        </SectionParagraph>
        <SectionParagraph>
          You can find my projects on my
          <LinkBtn link="https://github.com/mightykillrr" text="Github"/>
          or on my
          <LinkBtn link="/" text="Portfolio"/>
          page. I usually don't update my portfolio page but all my recent one's are on github.
        </SectionParagraph>
        <SectionParagraph>
          Outside of my work-life, I love to play Valorant and CS:GO, listening to
          Em. on Spotify, or just hanging out on Discord with my friends. You can
          follow along about my life on my
          <LinkBtn link="https://www.instagram.com/aniketkotal/" text="Instagram"/>
          or
          <LinkBtn link="https://twitter.com/mightykillrr" text="Twitter"/>
          . I
          post very rarely so you might not find many posts on either.
        </SectionParagraph>
        <SectionParagraph>
          Credits to
          <LinkBtn link="https://www.pexels.com/@readymade" text="@readymade"/>
          for header picture!
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
