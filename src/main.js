import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import "@/assets/iconfont/iconfont.js"; //字体图标
// import "@/assets/iconfont/iconfont.css"; //字体图标
import "./assets/iconfont/iconfont";

createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
