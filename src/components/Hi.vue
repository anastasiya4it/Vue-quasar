<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template lang="pug">
  h1 {{ msg }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
