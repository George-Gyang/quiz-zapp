<script setup>
import {ref, watch} from "vue"
import RawData from "../components/data/RawData.json"
import Card from "../components/Card.vue";

const quizzes = ref(RawData)

const search = ref("")

// Search Functionality

const seachQuiz =  watch(search, ()=>{
   quizzes.value = RawData.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

// const quizzes = [
//   {
//     id: 1,
//     subject: "English",
//     quest: 40,
//     src: "https://picsum.photos/id/300/300/300",
//   },
//   {
//     id: 2,
//     subject: "Maths",
//     quest: 20,
//     src: "https://picsum.photos/id/78/300/300",
//   },
//   {
//     id: 3,
//     subject: "Accounting",
//     quest: 430,
//     src: "https://picsum.photos/id/500/300/300",
//   },
//   {
//     id: 4,
//     subject: "Commerce",
//     quest: 40,
//     src: "https://picsum.photos/id/10/300/300",
//   },
//   {
//     id: 5,
//     subject: "Art",
//     quest: 90,
//     src: "https://picsum.photos/id/1/300/300",
//   },
// ];
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-primary text-center my-4">Quizzybyte</h1>
      <div>
        <div class="row align-items-center">
          <div class="col-md-2">
            <h5 class="me-2">Quiz Search:</h5>
          </div>
          <div class="col-4">
            <div class="input-group input-group-sm mb-3">
              <input
              v-model.trim="search"
                type="text"
                placeholder="search"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
        </div>
      </div>
    </div>
  </main>
</template>
