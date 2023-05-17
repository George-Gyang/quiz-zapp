<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="container mt-5">
    <div class="row">
      <div class="pt-5">
        <div class="col-md-6 landing-col pt-3">
            <h1 class="text-primary text-center">Quizzybyte</h1>
          <div class="landing">
            <div class="">
              <h3 class="text-center fs-2 mb-5">Test your Quiz-Abilty</h3>
              <RouterLink to="/quiz" class="fs-4">Proceed to Quiz</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.landing-col {
  background-color: rgb(215, 225, 226);
  border-radius: 20px;
}

.landing {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
