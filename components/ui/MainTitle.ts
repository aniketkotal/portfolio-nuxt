import {h} from "vue";

export default(props, context) => h("h1", {
  class: "text-xl sm:text-3xl md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text",
}, [context.slots.default(), h("span", {class: "text-link_text_hover"}, ".")])