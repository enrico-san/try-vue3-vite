<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
import { computed } from 'vue'

const counterStore = useCounterStore()
const counter = computed(() => counterStore.counter);
const increment = () => counterStore.increment()
</script>

<template>
  <div class="greetings">
    <h3 class="green">Page1 component, via router</h3>
    <h4 class="red">Counter: {{ counter }}</h4>
  </div>
</template>
