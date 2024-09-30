<script setup>
import {defineProps} from 'vue'
const props = defineProps(
//   [color, text-color]
{color: String, textColor: String}

)
</script>

<template lang="pug">
      q-btn(:color="props.color"
      :text-color="props.textColor"
      icon="close"
      size="12px")
</template>
<style  scoped>

</style>
