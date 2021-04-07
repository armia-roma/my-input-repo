<template>
  <label>{{label}}</label>
  <input :type="type" :value="modelValue" class="myInput" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
    name:"MyInput",
        props: ["label", "modelValue", "type"],
    data() {
        return{
           
        }
    },
    computed:{
        dataInput: {
           
        }
    },
    methods: {
        updateValue() {
            
        }
    },
    
}
</script>

<style>
label{
    color:#355c7d;
    font-weight: bold;
}
.myInput{
    display: block;
    margin: 20px auto;
    border:none;
    border-bottom: 1px solid ;
    outline: none;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    letter-spacing: 1px;
    width: 100%;
    color:#355c7d;
    text-transform: capitalize;
    
}

</style>