<template>
  <div class="container">
    <div class="q-display-2">User List</div>
    <div v-if="usersLength()">
      <table style="max-width: 10px" class="q-table"><tr><td>
      <table>
        <thead>
        <tr>
          <th ><div class="q-subheading">Name</div></th>
          <th ><div class="q-subheading">Address</div></th>
          <th ><div class="q-subheading">AGE</div></th>
          <th ><div class="q-subheading">Email</div></th>

        </tr>
        </thead>
        <tbody v-for="(user,index) in users" >

        <tr>
          <td >{{user.name}}</td>
          <td >{{user.address}}</td>
          <td >{{user.age}}</td>
          <td >{{user.email}}</td>
            <q-btn-group rounded>
              <q-btn v-on:click="deleteUser(user.id,index)" color="red" rounded glossy icon="delete" label="Delete"/>
              <q-btn v-on:click="edit(user.id)" color="blue" rounded glossy icon-right="edit" label="Edit" />
              <q-btn v-on:click="view(user)" color="yellow" rounded glossy icon="visibility" label="View/Hide" />
            </q-btn-group>

        </tr>

        </tbody>

      </table>
      </td>
        <td>
          <div v-show="viewUser">
            <br/><div class="q-display-1">User details</div><br/>
            <p>ID: {{userToView.id}}</p>
            <p>Name: {{userToView.name}}</p>
            <p>Age: {{userToView.age}}</p>
            <p>Address: {{userToView.age}}</p>
            <p>Email: {{userToView.email}}</p>

          </div>
        </td>
      </tr>
      </table>

    </div>
    <div v-else>
      <div class="q-display-3" style="color: darkred">Empty table</div>
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
