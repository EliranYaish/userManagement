<template>
  <div>
    <div class="q-display-3">{{msg}}</div>
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
