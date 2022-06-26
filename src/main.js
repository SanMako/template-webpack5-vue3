import { createApp } from "vue";
import App from "./App.vue";

// 通过 createApp 初始化 app
const app = createApp(App);
// 将页面挂载到 root 节点
app.mount("#app");
