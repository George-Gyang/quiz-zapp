<script setup>
const quizzes = [
  {
    id: 1,
    subject: "English",
    quest: 40,
    src: "https://picsum.photos/id/300/300/300",
  },
  {
    id: 2,
    subject: "Maths",
    quest: 20,
    src: "https://picsum.photos/id/78/300/300",
  },
  {
    id: 3,
    subject: "Accounting",
    quest: 430,
    src: "https://picsum.photos/id/500/300/300",
  },
  {
    id: 4,
    subject: "Commerce",
    quest: 40,
    src: "https://picsum.photos/id/10/300/300",
  },
  {
    id: 5,
    subject: "Art",
    quest: 90,
    src: "https://picsum.photos/id/1/300/300",
  },
];
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-primary">Hello world!</h1>
      <div>
        <div class="row align-items-center">
          <div class="col-md-2">
            <h5 class="me-2">Quiz Search:</h5>
          </div>
          <div class="col-4">
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="p-4 px-md-1 col-md-3" v-for="quiz in quizzes" :key="quiz.id">
            <div class="card">
              <a href="">
                <img
                  :src="quiz.src"
                  class="card-img-top img-fluid"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{{ quiz.subject }}</h5>
                  <p class="card-text">{{ quiz.quest }} question</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
