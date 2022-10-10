import {defineStore} from "pinia";
import {WorkStore} from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
    const works = [
        {
            id: 1,
            name: "Trileotech",
            position: "Jr. Frontend Developer",
            from: "2022",
            to: "Cur.",
            link: "https://trileotech.com/",
        }
    ]

    return {
        getAllWorks: works.slice()
    }
})