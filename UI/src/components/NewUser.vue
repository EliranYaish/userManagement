<template>
  <div class="newUser">
    <div class="container">
      <h1>Add New User</h1>
      <p>Please enter the following details</p>
      <form>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" placeholder="Enter name"id="name" v-model="newUser.name" required>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" placeholder="Enter email"id="email" v-model="newUser.email" required>
        </div>
        <div class="form-group">
          <label>Age:</label>
          <input type="number" class="form-control" placeholder="Enter age"id="age" v-model="newUser.age" required>
        </div>
        <div class="form-group">
          <label>Address:</label>
          <input type="text" class="form-control" placeholder="Enter address"id="address" v-model="newUser.address" required>
        </div>
        <br>
        <div align="center">

          <button v-on:click="addUser()" type="button"  class="btn btn-default">Add</button>
          <button v-on:click="returnToHome()" type="button"  class="btn btn-default">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    name: 'NewUser',
    data(){
      return{
        newUser:{
          name:"",
          email:"",
          age:"",
          address:""


        }
      }
    },
    methods: {
      returnToHome: function(){
        this.$router.push({ name: 'UserList'});

      },
      addUser:function(){

        axios.post('http://localhost:8081/user/add',this.newUser).then(response => {
          console.log(response);
          this.returnToHome();

        });
      }

    }
  }
</script>
