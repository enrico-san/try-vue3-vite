<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
import { computed } from 'vue'

const counterStore = useCounterStore()
const doubleCount = computed(() => counterStore.doubleCount)
const increment = () => counterStore.increment()
</script>

<template>
  <div class="greetings">
    <h3 class="green">Page2 component, via router</h3>
    <h4 class="red">Double Counter: {{ doubleCount }}</h4>
    <button @click="increment">Increment</button>
  </div>
</template>

