import { createApp } from "vue";
import naive from "naive-ui"
import JsonViewer from "vue-json-viewer"
import "./style.css";
import 'vfonts/Lato.css' // 通用字体
import 'vfonts/FiraCode.css' // 等宽字体
import App from "./App.vue";

createApp(App).use(naive).use(JsonViewer).mount("#app");
