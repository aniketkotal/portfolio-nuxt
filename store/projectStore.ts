import {defineStore} from "pinia";
import {ProjectStore} from "../types/typings";

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects = [
        {
            id: 6,
            name: "Hanako - Discord Bot",
            image: "../assets/featured/hanako.jpg",
            description:
                "A multiple-purpose Discord Bot with a focus on fun and utility commands. Made this bot to help me with my Discord server.",
            tech: ["TypeScript", "Discord.js", "Node.js"],
            link: "https://github.com/mightykillrr/hanako/",
            featured: true,
        },
        {
            id: 3,
            name: "Stust - Fictional Card Designers",
            image: "../assets/featured/stust.png",
            description:
                "Stust is a made-up company which designs minimalistic card designs with high quality. This was a website made to practice Vue.js",
            tech: ["Vue.js", "TailwindCSS"],
            link: "https://stust.vercel.app/",
            featured: true,
        },
        {
            id: 4,
            name: "Mikey Wazooski",
            image: "../assets/featured/mikey.jpg",
            description:
                "A feature-rich Discord bot I made to help me with my server and give action commands with great GIFs.",
            tech: ["JS", "Node.js", "MongoDB", "Heroku"],
            link: "https://discord.com/oauth2/authorize?client_id=819239364395532370&permissions=3912576065&scope=bot%20applications.commands",
        },
        {
            id: 1,
            name: "Scarlet Dynasty",
            image: "../assets/featured/scarlet_dyn.png",
            description:
                "I made this website for my friend's online store. Scarlet Dynasty is a team creating content for Minecraft Marketplace.",
            tech: ["Vue.js", "Pinia", "TailwindCSS"],
            link: "https://scarletdynasty.vercel.app/",
            featured: false,
        },
        {
            id: 2,
            name: "My Old Portfolio",
            image: "../assets/featured/portfolioprev.png",
            description:
                "This is my first portfolio page. Before this one, I used it to showcase my projects.",
            tech: ["Vue.js", "TailwindCSS"],
            link: "https://aniketkotal.vercel.app/",
        },
        {
            id: 5,
            name: "Advice Generator",
            image: "../assets/featured/advice-gen.png",
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
            image: "../assets/featured/case_changer.jpg",
            description:
                "A simple text case modifier to change case of text as need.",
            tech: ["Python", "Pandas"],
            link: "https://github.com/mightykillrr/case_changer",
        },
        {
            id: 2,
            name: "Tic Tac Toe",
            image: "../assets/featured/tic_tac_toe.jpg",
            description:
                "A game I made as a school project which I am very proud of.",
            tech: ["Python", "Pandas"],
            link: "https://github.com/mightykillrr/tic-tac-toe",
        },
        {
            id: 3,
            name: "Advanced Calculator",
            image: "../assets/featured/calc.jpg",
            description:
                "An advanced calculator and my first ever HUGE Python project.",
            tech: ["Python", "MathLib"],
            link: "https://github.com/mightykillrr/advanced_calc",
        },
    ]

    return {
        getAllProjects: projects.slice(),
        getFeaturedProjects: projects.filter((project) => project.featured),
        getGraveProjects: grave.slice(),
    };
})

