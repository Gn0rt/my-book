<script setup>
import AdminLogin from './AdminLogin.vue';
import { reactive } from 'vue';
const users = reactive([
  {
    email: 'abc@gmail.com',
    password:'123456',
    name: 'Gnort',
    age: 20,
    address: 'Hà Nội',
    role: 'user',
  },
  {
    email: 'bbc@gmail.com',
    password: '123456',
    name: 'Huyn',
    age: 21,
    address: 'Hà Nội',
    role: 'admin'
  }
])
</script>
<template>
    <div>
        <AdminLogin :admin="users" />
    </div>
</template>