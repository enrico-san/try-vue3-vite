<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
import { computed } from 'vue'

const counterStore = useCounterStore()
const counter = computed(() => counterStore.counter);

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h3 class="green">{{ msg }}</h3>
    <h4 class="red">Counter: {{ counter }}</h4>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
