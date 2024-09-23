<script setup>
import { computed, defineProps, defineEmits} from 'vue'

const props = defineProps({
  post: {type:Object},
})
const emit = defineEmits(['closePost'])
const closePost=()=>{
  // console.log(props.post.id)
  emit('closePost', props.post.id);
}
const articlePhoto= computed(() => {
  return props.post.media[0]?.['media-metadata'][2].url
})
// const posts = getPosts();
</script>
<!-- img(src=props.post.media) -->
<template lang="pug">
  q-card( dark bordered class="inner" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)")
    div.absolute-top(class="row justify-end top-inline")
      q-btn(color="grey-4" text-color="purple"  @click="$emit('closePost', props.post.id)" icon="close" size="12px")
    q-img(:src="articlePhoto")
      div.absolute-bottom.text-h8(style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;") fhoto by {{props.post.media[0]?.copyright}}
    q-card-section
      div(class="text-h6") {{props.post.title}}
      div(class="text-subtitle2") {{props.post.byline}}     
      q-separator(dark inset)
      q-card-section {{ props.post.abstract}}
</template>
<style  scoped>
.inner{
  width: 300px;
  position: relative;
}
.top-inline{
  z-index: 10;
}
.btn{
  position: absolute;
  right: 0;
  top: 0;
}
</style>