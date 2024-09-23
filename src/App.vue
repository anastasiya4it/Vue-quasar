<script setup>
import { ref, onMounted } from 'vue'
import { getPosts } from './api/getPosts.js';
import InputSearch from './components/Basic.vue'
import PostList from './components/PostList.vue'
import Hi from './components/Hi.vue'

const posts = ref([])
onMounted(async()=>{
    try{
    posts.value=  await getPosts();
    // console.log(posts.value);
    }catch(e){
        console.log(e);
    }
})

function closePost(id){
  posts.value=posts.value.filter(item=>item.id!=id)
}

</script>

<template>
  <!-- <Basic /> -->
   <InputSearch/>
  <PostList :posts="posts" @close-post="closePost"/>
  <Hi :msg="'go'"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
