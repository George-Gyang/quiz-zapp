<script setup>
import {defineProps} from "vue"

const {quiz} = defineProps(["quiz"])
</script>

<template>
  <div class="p-4 px-md-1 col-md-4">
    <div class="card">
      <RouterLink :to="`/quiz/${quiz.id}`" class="nav-link">
        <img :src="quiz.img" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ quiz.name }}</h5>
          <p class="card-text">{{ quiz.questions.length }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
