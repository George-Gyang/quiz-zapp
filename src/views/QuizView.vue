<script setup>
import {ref} from "vue"
import { useRoute, RouterLink } from "vue-router";
import RawData from "../components/data/RawData.json";
import Question from "../components/Questions.vue";

const route = useRoute();

const quiz = RawData.find((q) => q.id === parseInt(route.params.id));
const questionIndex = ref(0);
</script>

<template>
  <div class="p-4">
    <div class="card mb-3 mx-auto" style="max-width: 600px">
      <img :src="quiz.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ quiz.name }}</h5>
        <Question :question="quiz.questions[questionIndex]" />
      </div>
    </div>
  </div>
</template>
