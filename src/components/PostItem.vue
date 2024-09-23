<script setup>
defineProps({
  post: {type:String},
})
// const posts = getPosts();
</script>

<template lang="pug">
   q-card( dark bordered class="bg-grey-9 inner")
      q-card-section
        div(class="text-h6") Our Changing Planet
        div(class="text-subtitle2") by John Doe      
      q-separator(dark inset)
      q-card-section {{ post }}
</template>
<style  scoped>
.inner{
  width: 250px;

}
</style>