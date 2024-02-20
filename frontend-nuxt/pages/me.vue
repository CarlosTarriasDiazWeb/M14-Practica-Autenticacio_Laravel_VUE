<script setup lang="ts">
import axios from 'axios';

definePageMeta({
  middleware: ["auth"]
});

const {user} = useAuth();

// const userData : {name: string, email: string} = ref({
//   name: "",
//   email: ""
// });

//const userData = ref<User|null>(null);

// const getUserData = async () => {
//   try { 
//     const res = await axios.get("/user");
//     console.log(res);
//     const {data} = res;
//     userData.name = data.name;
//     userData.email = data.email;

//   }catch(error){
//     console.error(error);
//   }
// }
</script>
<template>
  <p><strong>User Name:</strong> {{ user?.name }}</p>
  <p><strong>User Email:</strong> {{ user?.email }}</p>
</template>
