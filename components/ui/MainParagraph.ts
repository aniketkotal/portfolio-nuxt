import {h} from "vue"

export default(props, context) => h("p",
    {class: "text-sm md:text-base leading-relaxed slg:text-lg slg:leading-8", href: props.link},
    context.slots.default()
)