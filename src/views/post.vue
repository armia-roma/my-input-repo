<template>
  <input type="text">
  <h1>posts</h1>
  <div v-if="error">{{error}}</div>
  <PostList :posts="posts" />
  <button @click="posts.pop()">delete a post </button>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
export default {
setup(){
    const posts = ref([])
    const error = ref([null])    
    const load = async () => {
        try {
          let data = await fetch('http://localhost:3000/posts')
          if(!data.ok){
              throw Error('no data availabe')
          }
          posts.value = await data.json()
          console.log(data)  
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    load()
    return {posts  , error} 
},
components: {   PostList  }
}
</script>

<style>

</style>