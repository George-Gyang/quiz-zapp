<script setup>
import { useRoute } from "vue-router";
import RawData from "../components/data/RawData.json";

const route = useRoute();

const quiz = RawData.find((q) => q.id === parseInt(route.params.id));
</script>

<template>
  <div class="mx-4">
    <div class="card mb-3">
      {{ quiz }}
      <img :src="quiz.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ quiz.name }}</h5>
        <div v-for="eachQ in quiz.questions" :key="eachQ.id" class="">
          <p>{{ eachQ.text }}</p>
          <ul v-for="option in eachQ.options" :key="option.id">
            <RouterLink to="">
              <li>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    {{ option.label }}: {{ option.text }}
                  </label>
                </div>
              </li>
            </RouterLink>
          </ul>
        </div>
        <p class="card-text">
          <small class="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>
