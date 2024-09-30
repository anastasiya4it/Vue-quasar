<script setup>
import { ref, onMounted } from 'vue'
import { getPosts } from './api/getPosts.js';
import InputSearch from './components/InputSearch.vue'
import PostList from './components/PostList.vue'


const posts = ref([]);
const allPosts = ref([]);
const text =ref();
onMounted(async()=>{
    try{
    posts.value=  await getPosts();
    allPosts.value=posts.value;
    }catch(e){
        console.log(e);
    }
})

function closePost(id){
  posts.value=posts.value.filter(item=>item.id!=id)
  allPosts.value=posts.value;
}
function sortPost(inner){
  text.value=inner;
  allPosts.value=posts.value.filter(post=>post.title.toLowerCase().includes(text.value.toLowerCase()))
}
function clear(){
  text.value='';
  allPosts.value=posts.value;
}

</script>

<template>
  <InputSearch :modelValue="text"
  @update:model-value="$event => sortPost($event)" 
  @click="clear"/>

  <PostList :posts="allPosts" @close-post="closePost"/>
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
.color{
  color: #000;
  font-size: 16px;
}
</style>
