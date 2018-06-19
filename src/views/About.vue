<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import {
    projectList
  } from '../api/api';
  export default {
    data() {
      return {
          bool : true,
          groupHide : false,
      }
    },
    methods:{
      abc(data){
         // eslint-disable-next-line
        projectList(data).then(res=>{

        });
      }
      
    },
    mounted:function(){
      this.abc("{}");
    }
  }
  
</script>