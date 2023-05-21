<script setup>
// import login from "./login.vue";
import { RouterLink } from "vue-router";

const {userName} = defineProps(["userName"])

// console.log(userName.value)
</script>

<template>
  <main class="container behind mt-5">
    <div class="rounded-5 landing-col p-5" style="max-width: 600px;">
      <h1 class="text-primary text-center mb-2">Quizzybyte</h1>
      <div class="landing">
        <div class="">
          <h3 class="text-center fs-2 mb-5">Test your Quiz-Abilty</h3>
          <RouterLink to="/quiz" class="fs-4">Proceed to Quiz</RouterLink>
        </div>
      </div>
    </div>
    <!-- <div class="col-md-6 p-0">
      <div>
        <img
          src="https://res.cloudinary.com/gyang/image/upload/v16843695
          04/portfolio/quizapp/soundtrap-5Wj_tk8_Ens-unsplash_1_mxccbe.jpg"
          alt=""
          class="img-fluid rounded-5"
        />
      </div>
    </div> -->
  </main>
</template>

<style scoped>
.landing-col {
  background-color: rgb(215, 225, 226);
  border-radius: 20px;
}

.landing {
  /* height: 80vh; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.behind {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://res.cloudinary.com/gyang/image/upload/v1684369504/portfolio/quizapp/soundtrap-5Wj_tk8_Ens-unsplash_1_mxccbe.jpg");
  background-size:cover;
  /* background-color: black; */
  /* opacity: 0.5; */
  height: 80vh;
}
</style>
