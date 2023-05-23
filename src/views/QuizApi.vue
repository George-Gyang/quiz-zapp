<script setup>
import { ref } from "vue";
import axios from "axios";

let apiInfor = ref("")

const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  params:{
    limit: '10'
  },
  headers: {
    'X-RapidAPI-Key': 'd97d1e9598msh39f4fa9b3fcfaf6p18a9dejsn0be4d90f9b4d',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
     apiInfor.value = response.data.content
     console.log(apiInfor.value)
} catch (error) {
	console.error(error);
}

</script>

<template>
  <div>
    <main>
      <div class="vue_api">
        <h3>vue api here</h3>
        {{ apiInfor }}
      </div>
    </main>
  </div>
</template>
