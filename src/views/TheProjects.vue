<template>
  <div class="flex flex-col gap-16 slg:gap-24">
    <div class="flex flex-col gap-5 slg:gap-12">
      <h1
        class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-head_text"
      >
        Projects<span class="text-link_text_hover">.</span>
      </h1>
      <p class="text-base slg:text-lg">
        Here are projects I've worked on in my past year of web development. Not
        all are great but they're in order of my experience.
      </p>
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <div class="flex flex-col items-center justify-center gap-28">
      <MainProjectItem
        v-for="proj in projects"
        :key="proj.id"
        :name="proj.name"
        :image="proj.image"
        :description="proj.description"
        :link="proj.link"
      />
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
    <div class="flex flex-col gap-2">
      <h3 class="text-2xl font-theme_bold text-head_text">Graveyard</h3>
      <p>Python projects I worked on and are no longer maintained.</p>
      <div class="flex flex-col mt-10 gap-8">
        <div v-for="proj in grave" :key="proj.id" class="flex flex-col gap-1">
          <a class="font-theme_bold text-head_text" :href="proj.link"
            >{{ proj.name }}
            <Icon class="inline text-xl" icon="ep:top-right" color="#eaeaea"
          /></a>
          <p>{{ proj.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainProjectItem from "../components/ui/MainProjectItem.vue";

export default {
  components: { MainProjectItem },
  setup() {
    const projects = [
      {
        id: 1,
        name: "Scarlet Dynasty",
        image: new URL("../assets/featured/scarlet_dyn.png", import.meta.url)
          .href,
        description:
          "I made this website for my friend's online store. Scarlet Dynasty is a team creating content for Minecraft Marketplace.",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "https://scarletdynasty.vercel.app/",
      },
      {
        id: 2,
        name: "My Old Portfolio",
        image: new URL("../assets/featured/portfolioprev.png", import.meta.url)
          .href,
        description:
          "This is my first portfolio page. Before this one, I used it to showcase my projects.",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://aniketkotal.vercel.app/",
      },
      {
        id: 3,
        name: "Stust - Fictional Card Designers",
        image: new URL("../assets/featured/stust.png", import.meta.url).href,
        description:
          "Stust is a made-up company which designs minimalistic card designs with high quality. This was a website made to practice Vue.js",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://stust.vercel.app/",
      },
      {
        id: 4,
        name: "Mikey Wazooski",
        image: new URL("../assets/featured/mikey.jpg", import.meta.url).href,
        description:
          "A feature-rich Discord bot I made to help me with my server and give action commands with great GIFs.",
        tech: ["JS", "Node.js", "MongoDB", "Heroku"],
        link: "https://discord.com/oauth2/authorize?client_id=819239364395532370&permissions=3912576065&scope=bot%20applications.commands",
      },
      {
        id: 5,
        name: "Advice Generator",
        image: new URL("../assets/featured/advice-gen.png", import.meta.url)
          .href,
        description:
          "A very simple Advice Generator, which gives advice with a click!",
        tech: ["HTML", "CSS", "JS", "REST APIs"],
        link: "https://advice-generator-ap.vercel.app/",
      },
    ];

    const grave = [
      {
        id: 1,
        name: "Text Case Changer",
        image: new URL("../assets/featured/case_changer.jpg", import.meta.url)
          .href,
        description:
          "A simple text case modifier to change case of text as need.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/mightykillrr/case_changer",
      },
      {
        id: 2,
        name: "Tic Tac Toe",
        image: new URL("../assets/featured/tic_tac_toe.jpg", import.meta.url)
          .href,
        description:
          "A game I made as a school project which I am very proud of.",
        tech: ["Python", "Pandas"],
        link: "https://github.com/mightykillrr/tic-tac-toe",
      },
      {
        id: 3,
        name: "Advanced Calculator",
        image: new URL("../assets/featured/calc.jpg", import.meta.url).href,
        description:
          "An advanced calculator and my first ever HUGE Python project.",
        tech: ["Python", "MathLib"],
        link: "https://github.com/mightykillrr/advanced_calc",
      },
    ];

    return { projects, grave };
  },
};
</script>
