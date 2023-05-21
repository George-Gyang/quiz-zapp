import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./assets/main.css"
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       name: "Home",
//       component: Home,
//     },
//     {
//       path: "/quiz",
//       name: "Quiz",
//       component: Quizzes,
//     },
//     {
//       path: "/quiz/:id",
//       name: "QuizView",
//       component: QuizView,
//     },
//     // {
//     //     path: "/counter",
//     //     name: "Counter",
//     //     component: Counter
//     // },
//     // {
//     //     path: "/:pathall(.*)*",
//     //     name: "Not Found",
//     //     component: ErrorPage
//     // }
//   ],
// });

const app = createApp(App)
app.use(router)
app.mount("#app");

// createApp(App).mount('#app')
