import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { Icon } from "@iconify/vue";
import LinkBtn from "./components/ui/LinkBtn.vue";

const app = createApp(App);

app.component("Icon", Icon);
app.component("LinkBtn", LinkBtn);
app.use(router);

app.mount("#app");
