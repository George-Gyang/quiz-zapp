<script setup>
import { defineProps } from "vue";
import Options from "./Options.vue";

const {question} = defineProps(["question"]);
</script>

<template>
  <div>
    <div class="">
      <p class="fs-2">{{ question.text }}</p>
    </div>
    <Options :options="question.options" />
    <p class="card-text">
    </p>
  </div>
</template>
