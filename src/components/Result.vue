<script setup>
import {  } from "vue"

const{correctQuestion, questionIndex, colorMark } = defineProps(["questionIndex", "correctQuestion", "colorMark"])

</script>

<template>
  <div>
    <div class="d-flex justify-content-center">
      <div :class="colorMark" class=" pulse result">
        <h1 class="text-light">
          {{ correctQuestion }} /  {{questionIndex}} 
        </h1>
      </div>
    </div>
    <RouterLink to="/quiz">
      <button class="btn btn-sm bg-dark text-white">Back</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.result{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-top: 2rem;
}
.pulse {
  animation: pulse 1s infinite ease-in-out alternate;
}
@keyframes pulse {
  from { transform: scale(0.8); }
  to { transform: scale(1.2); }
}
</style>
