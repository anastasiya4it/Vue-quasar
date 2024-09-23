<script setup>
import { ref, onMounted } from 'vue'
import { getPosts } from '../api/getPosts.js';
import PostItem from './PostItem.vue'

const posts = ref([])

onMounted(async()=>{
    try{
    posts.value=  await getPosts();
    console.log(posts.value);
    }catch(e){
        console.log(e);
    }
})
</script>

<template lang="pug">
  div(class="box")
    div( v-for="post in posts" :key="post.id")
        PostItem( :post="post.abstract")
</template>
<style  scoped>
.box{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>