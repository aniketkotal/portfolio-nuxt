<template>
  <div class="flex flex-col gap-2 lg:gap-4">
    <h3 class="font-theme_bold text-2xl text-head_text">Featured Projects</h3>
    <p>Here are some of the projects that I'm proud of.</p>
    <div class="flex flex-col gap-6 sm:gap-12 pt-8 mx-auto sm:w-5/6 slg:w-full">
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :image="project.image"
        :description="project.description"
        :tech="project.tech"
        :link="project.link"
      />
    </div>
  </div>
</template>
<script>
import ProjectItem from "../ui/ProjectItem.vue";

export default {
  setup() {
    const projects = [
      {
        id: 1,
        name: "Scarlet Dynasty",
        image: new URL("../../assets/featured/scarlet_dyn.png", import.meta.url)
          .href,
        description:
          "I made this website for my friend's online store. Scarlet Dynasty is a team creating content for Minecraft Marketplace.",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "https://scarletdynasty.vercel.app/home",
      },
      {
        id: 2,
        name: "Stust - Fictional Card Designers",
        image: new URL("../../assets/featured/stust.png", import.meta.url).href,
        description:
          "Stust is a made-up company which designs minimalistic card designs with high quality. This was a website made to practice Vue.js",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://stust.vercel.app/",
      },
    ];

    return { projects };
  },
  components: { ProjectItem },
};
</script>
