<template>
  <div id="app">

    <router-link :to="{ name: 'UserList' }">Users List</router-link>
    <router-link to="/newUser">New User</router-link>
    <router-view></router-view>
  </div>
</template>
