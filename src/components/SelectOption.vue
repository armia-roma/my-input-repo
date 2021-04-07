<template>
    <label>{{country}}</label>
    <select >
        <option v-for="country in countryList" :key="country" :value="country">{{country}}</option>
    </select>
</template>

<script>
export default {
    name:"SelectOption",
    props:["country"],
    data(){
        return{
            emtyContry:''
        }
    }
    }

</script>

<style>

</style>