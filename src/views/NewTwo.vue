<script setup>
// import useApi from '@/useApi.js';
import New from './New.vue';


    const { state, fetchData } = useApi();

    return {
      state,
      fetchData
    };

</script>

<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
  
      <div v-if="state.loading">
        Loading...
      </div>
  
      <div v-else>
        <div v-if="state.error">
          Error: {{ state.error }}
        </div>
  
        <div v-else>
          <ul v-if="state.data">
            <li v-for="item in state.data" :key="item.id">{{ item.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  