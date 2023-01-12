<script setup lang="ts">
import { ref } from 'vue'
import { toggleDark } from '../hooks/dark'

const count = ref(0)
</script>

<template>
  <div fixed top-1 right-1 items-center>
    <button class="btn btn-secondary" @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
  </div>
  <div grid place-items-center w-100vw text-center space-y-2>
    <div class="alert alert-info shadow-lg">
      <span>New software update available.</span>
    </div>

    <div class="card">
      <button type="button" class="btn btn-primary" @click="count++">
        count is {{ count }}
      </button>
    </div>
    <div data-theme="cupcake">
      <button type="button" class="btn btn-warning" @click="count++">
        count is {{ count }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
