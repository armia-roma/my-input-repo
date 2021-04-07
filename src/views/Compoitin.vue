<template>
<div class="home">
    <input type="text" v-model="search">
    <p> the search is {{search}} </p>
    <div v-for="name in matchingName" :key="name" class="name">{{name}}</div>
    <button @click="stopwatch"></button>
</div>
</template>

<script>
import { ref, computed, watch } from 'vue'
export default {
    name:"home",
setup() {
    const search = ref('')
    const names = ref(['mario','yoshi','luigi','toad','bowser','koopa','peach'])
    const stopwatch = watch(search, () => {
        console.log('watch function run',search.value)
    })
    const matchingName = computed(() => {
        return names.value.filter((item) => item.includes(search.value))
    })
return{ search , names ,matchingName , stopwatch}
}

}
</script>

<style>
.name {
    background: gray;
    padding: 20px;
    margin: 20px auto;
    color:black;
    width: 300px;
    border-radius: 5px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 1px;

}
</style>