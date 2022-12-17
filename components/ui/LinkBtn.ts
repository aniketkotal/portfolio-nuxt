import {h} from "vue";

export default (props, context) => h(
    'a',
    {
        class: "border-b-2 border-link_border hover:border-link_border_hover hover:text-link_text_hover transition-colors text-link",
        href: props.link
    }, props.text)