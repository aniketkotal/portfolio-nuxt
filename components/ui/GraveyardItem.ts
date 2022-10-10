import {h} from "vue";
import {Icon} from "@iconify/vue";

export default(props) => h("div", {class: "flex flex-col gap-1"}, [
    h("a", {href: props.project.link, class: "font-theme_bold text-head_text text-lg"}, [
        props.project.name,
        h(Icon, {
            class: "inline text-xl mx-2",
            color: '#eaeaea',
            icon: 'ep:top-right'
        }),
    ]),
    h("p", {class: "font-theme text-sm lg:text-lg"}, props.project.description)
])