import { createApp } from "vue";
import App from "./App.vue";
import Home from "@/views/Home.vue"
import Quizzes from "@/views/quizzes.vue";
import QuizView from "@/views/QuizView.vue"
// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: Quizzes,
    },
    {
      path: "/quiz/:id",
      name: "QuizView",
      component: QuizView,
    },
    // {
    //     path: "/counter",
    //     name: "Counter",
    //     component: Counter
    // },
    // {
    //     path: "/:pathall(.*)*",
    //     name: "Not Found",
    //     component: ErrorPage
    // }
  ],
});

createApp(App).use(router).mount("#app");

// createApp(App).mount('#app')
