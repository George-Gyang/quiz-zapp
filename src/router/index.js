import Home from "@/views/Home.vue";
import Login  from "@/views/Login.vue";
import Quizzes from "@/views/quizzes.vue";
import QuizView from "@/views/QuizView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
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

export default router;
