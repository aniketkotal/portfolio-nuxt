import {h} from "vue"

export default (props, context) => h("a",
    {
        class: "bg-btn_back border-[1px] border-link_border px-2 py-2" +
            " rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 " +
            "slg:text-base slg:px-6 slg:py-3 w-fit",
        href: props.link
    },
    context.slots.default()
)
