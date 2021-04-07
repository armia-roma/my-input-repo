<template>
<ChildInput v-model="employName"/>
 <p>{{employName}}</p>
</template>

<script>
import ChildInput from "../components/ChildInput"
export default {
    components:{ChildInput},
    data(){
        return{
            employName:''
        }
    }
}
</script>

<style>

</style>