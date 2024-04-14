import { createApp } from "vue";
import App from "@/App.vue";
// 引入清楚默认样式
import "@/style/reset.scss";
import ElementPlus from "element-plus";

//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

import router from "@/router";

import HospitalTop from "@/components/HospoitalTop/index.vue";
import HospitalBottom from "@/components/HospoitalBottom/index.vue";
import store from "@/store";
import "@/permission";
const app = createApp(App);

app.component("HospitalTop", HospitalTop);
app.component("HospitalBottom", HospitalBottom);

app.use(router);
app.use(store);
app.use(ElementPlus, {
  locale: zhCn
});
app.mount("#app");
