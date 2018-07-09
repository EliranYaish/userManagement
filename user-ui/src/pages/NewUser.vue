<template>
  <div class="newUser">
    <q-page padding class="docs-input">
      <div style="width: 500px; max-width: 90vw;">
        <div class="q-display-2">Add New User</div>
        <p>Please enter the following details</p>
        <q-input v-model="newUser.name" type="text" float-label="Name" placeholder="Enter name"  required/><br>
        <q-input v-model="newUser.email" type="email" float-label="Email" placeholder="Enter email"  required/><br>
        <q-input v-model="newUser.age" type="number" float-label="Age" placeholder="Enter age"  required/><br>
        <q-input v-model="newUser.address" type="text" float-label="Address" placeholder="Enter address"  required/><br>

        <div align="center">
          <q-btn outline style="color: green;" @click="addUser()" label="Add" />&nbsp;
          <q-btn outline style="color: red;" @click="returnToHome()" label="Cancel" />
        </div>
      </div>
    </q-page>
    </div>
</template>

<script>
  import axios from 'axios'
  import QCardTitle from "quasar-framework/src/components/card/QCardTitle";
  export default {

    name: 'NewUser',
    components: {QCardTitle},
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

        }).catch(error => {
          console.log(error);
          this.$router.push({ name: 'Error', params:{errorMsg:"Network Error"} });
        });
      }

    }
  }
</script>
