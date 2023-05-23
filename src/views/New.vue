<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const useApi = () => {
  const state = reactive({
    data: null,
    error: null,
    loading: false
  });

  const fetchData = async (url) => {
    state.loading = true;

    try {
      const response = await axios.get(url);
      state.data = response.data;
      state.error = null;
    } catch (error) {
      state.data = null;
      state.error = error.message;
    }

    state.loading = false;
  };

  return { state, fetchData };
};
// export default useApi;
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
  
  <script>
  import useApi from '@/useApi.js';
  
  export default {
    setup() {
      const { state, fetchData } = useApi();
  
      return {
        state,
        fetchData
      };
    }
  };
  </script>
  