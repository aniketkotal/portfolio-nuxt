import {h, VNode} from "vue";
import {Icon} from "@iconify/vue";
import {Props} from "#head/types";

export default ((props: Props) => {
    const {link, title, icon} = props;
    return h('a', {href: link, title, target: '_blank', rel: 'noopener'},
        h(Icon, {icon, class: "text-p_text rounded-md hover:bg-border_sm p-2 transition-all", width: "50"})
    )
}) as () => VNode;