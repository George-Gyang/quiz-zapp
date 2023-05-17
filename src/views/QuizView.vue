<script setup>
import { ref, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import RawData from "../components/data/RawData.json";
import Question from "../components/Questions.vue";
import Result from "../components/Result.vue";

const route = useRoute();

const quiz = RawData.find((q) => q.id === parseInt(route.params.id));
const questionIndex = ref(0);

const attemptQ = computed(() => {
  return `${questionIndex.value}/ ${quiz.questions.length}`;
});

const handleNext = () => {
  if (questionIndex.value >= quiz.questions.length - 1) {
    return;
  } else {
    questionIndex.value++;
  }
};

const handlePrev = () => {
  if (questionIndex.value < 1) {
    return;
  } else {
    questionIndex.value--;
  }
};

const barPercentage = computed(() => {
  return `${(questionIndex.value / quiz.questions.length) * 100}%`;
});

const correctQuestion = ref(0);
const colorMark = ref("bg-danger");

const handleOptionSelected = (isCorrect) => {
  if (isCorrect) {
    correctQuestion.value++;

    if (correctQuestion.value === 3) {
      colorMark.value = "bg-success";
    } else if (correctQuestion.value === 2) {
      colorMark.value = "bg-secondary";
    } else {
      colorMark.value = "bg-danger";
    }
  }

  if (questionIndex.value + 1 === quiz.questions.length) {
    showResult.value = true;
  }
  questionIndex.value++;
  console.log(questionIndex.value);
  console.log(colorMark.value);
};

const showResult = ref(false);
</script>

<template>
  <div class="p-4">
    <div class="card mb-3 mx-auto" style="max-width: 550px">
      <img :src="quiz.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <div class="bar-container my-3">
          <h6 class="fs-2">Question: {{ attemptQ }}</h6>
          <div class="border border-warning border-4">
            <div
              :style="{ width: barPercentage }"
              class="bg-success py-3"
            ></div>
          </div>
        </div>
        <div v-if="!showResult">
          <h5 class="card-title">{{ quiz.name }}</h5>
          <Question
            :question="quiz.questions[questionIndex]"
            @selectedOption="handleOptionSelected"
            :key="quiz.id"
          />
          <div class="d-flex justify-content-between">
            <button @click="handlePrev" type="button" class="btn btn-dark">
              Previous
            </button>
            <button @click="handleNext" type="button" class="btn btn-dark">
              Next
            </button>
          </div>
        </div>
        <Result
          :colorMark="colorMark"
          :questionIndex="quiz.questions.length"
          :correctQuestion="correctQuestion"
          v-else="showResult"
        />
      </div>
    </div>
  </div>
</template>
