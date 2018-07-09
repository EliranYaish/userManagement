<template>
  <div class="updateUser">
  <q-page padding class="docs-input">
    <div style="width: 500px; max-width: 90vw;">
      <div class="q-display-2">Update User</div>
    <p>Make your changes</p>
      <q-input v-model="updateUserObj.id" type="text" float-label="ID" placeholder="Enter id"  readonly/><br>
      <q-input v-model="updateUserObj.name" type="text" float-label="Name" placeholder="Enter name"  required/><br>
      <q-input v-model="updateUserObj.email" type="email" float-label="Email" placeholder="Enter email"  required/><br>
      <q-input v-model="updateUserObj.age" type="number" float-label="Age" placeholder="Enter age"  required/><br>
      <q-input v-model="updateUserObj.address" type="text" float-label="Address" placeholder="Enter address"  required/><br>
      <br>
      <div align="center">
        <q-btn outline style="color: blue;" @click="updateUser()" label="Update" />&nbsp;
          <q-btn outline style="color: red;" @click="returnToHome()" label="Cancel" />
      </div>
    </div>

  </q-page>
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
