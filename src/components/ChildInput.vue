<template>
  <input type="text" :value="modelValue" @input="updateCode($event.target.value)">
  
</template>

<script>
export default {
    props:['modelValue'],
    data(){
        return{
            
        }
    },
    methods: {
        updateCode(code){
            this.$emit('update:modelValue', code);
        }
    }
}
</script>

<style>

</style>