<template>
  <div class="about">
    <h1>This is an about page</h1>
    <label >sudani</label>
    <input type="text" v-model="sd"><br>
    <label >amrecia</label>
    <input type="text" v-model="usa">
  </div>
</template>
<script>
export default {
  name:'about',
  data(){
    return{
      sd:0,
      usa:0
    }
  },
  watch:{
    sd: function(c) {
      this.usa = c / 380
    },
    usa: function(c) {
      this.sd = c * 380
    }
  }
}
</script>
