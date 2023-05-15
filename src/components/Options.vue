<script setup>
import { defineProps } from "vue";
const { options } = defineProps(["options"]);
</script>

<template>
  <div>
    <ul>
      <RouterLink to="" class="nav-link text-secondary">
        <li class="nav-link" v-for="option in options" :key="option.id">
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
</template>
