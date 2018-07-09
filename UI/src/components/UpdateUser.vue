<template>
  <div class="container">
    <h1>Update User</h1>
    <p>Make your changes</p>
    <form>
      <div class="form-group">
        <label>ID:</label>
        <input type="text" class="form-control" placeholder="Enter id"id="id" v-model="updateUserObj.id" readonly>
      </div>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" placeholder="Enter name" v-model="updateUserObj.name" required>
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" placeholder="Enter email" v-model="updateUserObj.email" required>
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input type="number" class="form-control" placeholder="Enter age" v-model="updateUserObj.age" required>
      </div>
      <div class="form-group">
        <label>Address:</label>
        <input type="text" class="form-control" placeholder="Enter address" v-model="updateUserObj.address" required>
      </div>
      <br>
      <div align="center">
        <button v-on:click="updateUser()" type="button"  class="btn btn-default">Update</button>
        <button v-on:click="returnToHome()" type="button"  class="btn btn-default">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {

    name: 'UpdateUser',

    data() {
      return {
        updateUserObj:{
          id:0,
          name:'',
          age:0,
          address:'',
          email:''
        }
      }
    },
    created () {

      this.updateUserObj.id =  this.$route.params.id;

      var vm = this;
        axios.get('http://localhost:8081/user/find/'+this.updateUserObj.id)
          .then(function (response) {
            vm.updateUserObj.id =response.data.id;
            vm.updateUserObj.name =response.data.name;
            vm.updateUserObj.address =response.data.address;
            vm.updateUserObj.email =response.data.email;
            vm.updateUserObj.age =response.data.age;

          });
      },
    methods: {
      returnToHome: function(){
        this.$router.push({ name: 'UserList'});

      },
      updateUser: function(){
        axios.put('http://localhost:8081/user/update',this.updateUserObj).then(response => {
          console.log(response);
          this.returnToHome();
        });
      }
    }
  }
</script>
