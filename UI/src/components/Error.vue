<template>
  <div>
    <h1>{{msg}}</h1>
    <p>For more information open the console</p>
  </div>
</template>
<script>

  export default {
    name: 'Error',

    data() {
      return {
        msg: ""
      }
    },
    created(){
      this.msg = this.$route.params.errorMsg;
    }
  }
</script>
