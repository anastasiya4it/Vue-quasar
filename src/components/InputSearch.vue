<script setup>
import { computed, defineProps, defineEmits} from 'vue'
import { ref } from 'vue'

const props = defineProps({
  text: {type:String},
})

</script>
<!-- img(src=props.post.media) -->
<template lang="pug">
    div(class="q-gutter-md" style="max-width: 300px")
        q-input(v-model="props.text" label="Standard")
</template>
<style  scoped>

</style>