<template>
  <div class="container">
    <h2>User List</h2>
    <div v-if="usersLength()">
      <table class="table table-striped">
        <thead>
        <tr>
          <th align="center">Name</th>
          <th align="center">Address</th>
          <th align="center">AGE</th>
          <th align="center">Email</th>
        </tr>
        </thead>
        <tbody v-for="(user,index) in users" >

        <tr>
          <td align="center">{{user.name}}</td>
          <td align="center">{{user.address}}</td>
          <td align="center">{{user.age}}</td>
          <td align="center">{{user.email}}</td>
          <td align="center"><button v-on:click="deleteUser(user.id,index)" type="button"  class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-trash"></span> Delete
          </button></td>
          <td align="center"><button v-on:click="edit(user.id)" type="button"  class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-edit"></span> Edit
          </button></td>
          <td align="center"><button v-on:click="view(user)" type="button"class="btn btn-default btn-sm">
            <span class="glyphicon glyphicon-user"></span> View/Hide
          </button></td>
        </tr>

        </tbody>
      </table>
    </div>
    <div v-else>
      <h1>Empty table</h1>
    </div>
    <div v-show="viewUser" >
      <p>ID: {{userToView.id}}</p>
      <p>Name: {{userToView.name}}</p>
      <p>Age: {{userToView.age}}</p>
      <p>Address: {{userToView.age}}</p>
      <p>Email: {{userToView.email}}</p>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'UserList',

    created () {
      var vm = this;
        axios.get('http://localhost:8081/user/find')
          .then(function (response) {
            vm.users = response.data;
          }).catch(error => {
            console.log(error);
            this.$router.push({ name: 'Error', params:{errorMsg:"Network Error"} });
          });

    },
    data () {
      return {

        users: [],
        userToView: false,
        viewUser: false,
        newUser:{
          name: '',
          email: '',
          age: 0,
          address:''
        },
        updateUserObj:{
          id:0,
          name:'',
          age:0,
          address:'',
          email:''
        }

      }
    },
    methods: {
      usersLength: function () {
        if (this.users.length > 0) {
          return true;
        }
        else {
          return false;
        }

      },
      deleteUser: function (id, index) {
        axios.delete('http://localhost:8081/user/delete/' + id)
          .then(response => {
            this.users.splice(index, 1);
            console.log(response.data);
          });

      },
      view: function (user) {

        if (this.userToView != user) {
          this.userToView = user;
          this.viewUser = true;
        }
        else {
          this.userToView = user;
          this.viewUser = !this.viewUser;
        }
      },
      edit: function (userID) {
        this.$router.push({name: 'UpdateUser', params: {id: userID}});

      }
    }
  }
</script>
