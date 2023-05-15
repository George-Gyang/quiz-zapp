<script setup>
import { defineProps } from "vue";
import Options from "./Options.vue";

const {question} = defineProps(["question"]);
</script>

<template>
  <div>
    <div :key="question.id" class="">
      <p class="display-5">{{ question.text }}</p>
    </div>
    <Options :options="question.options" />
    <p class="card-text">
      <small class="text-body-secondary">Last updated 3 mins ago</small>
    </p>
  </div>
</template>
