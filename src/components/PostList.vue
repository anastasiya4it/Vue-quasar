<script setup>
import PostItem from './PostItem.vue'
const props = defineProps({
  posts: {type:Object},
})
const emit = defineEmits(['closePost'])
</script>

<template lang="pug">
  div(class="box q-pa-md")
    q-list( v-for="post in props.posts" :key="post.id" separator)
      PostItem(:post="post" v-ripple:cyan-1 @close-post="$emit('closePost', post.id)")
</template>
<style  scoped>
.box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>