<script setup>
import { computed, defineProps, defineEmits} from 'vue'
import Btn from './Btn.vue';
import { ref } from 'vue'

const props= defineProps(
  ['modelValue']
);
const emit=defineEmits(['update:modelValue', 'clear']);
// const text=ref()
</script>
<template lang="pug">
    div(class="q-gutter-md" style="max-width: 50%; display: flex; justify-content: space-between; align-items: center")
      q-input(filled type="text"
      style="width: 80%"
      :model-value="props.modelValue"
      @update:model-value="(val) => $emit('update:modelValue',val)"
      label="Search title")
      Btn( @click="$emit('clear')" :color="'transparent'" :text-color="'primary'")
</template>
<style  scoped>

</style>
<!-- //$event.target.value -->