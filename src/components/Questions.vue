<script setup>
// import { defineProps } from "vue";

const { question } = defineProps(["question"]);

const emits = defineEmits(["selectedOption"]);
function emitSeletedOption(isCorrect) {
  emits("selectedOption", isCorrect);
}

</script>

<template>
  <div>
    <div class="">
      <p class="fs-2 fw-bold">{{ question.text }}</p>
    </div>
    <div>
      <ul>
        <li
          class="nav-link my-3 fs-4 me-5 p-2 fw-bold rounded bg-secondary option"
          v-for="option in question.options"
          :key="option.id"
          @click="emitSeletedOption(option.isCorrect)"
        >
          <span>{{ option.label }}</span> : <span>{{ option.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.option{
cursor: pointer;
}
</style>
