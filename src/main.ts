import { createApp } from "vue";
import App from "@/App.vue";
// 引入清楚默认样式
import "@/style/reset.scss";

import router from "@/router";

import HospitalTop from "@/components/HospoitalTop/index.vue";
import HospitalBottom from "@/components/HospoitalBottom/index.vue";

const app = createApp(App);

app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);

app.use(router);
app.mount("#app");
