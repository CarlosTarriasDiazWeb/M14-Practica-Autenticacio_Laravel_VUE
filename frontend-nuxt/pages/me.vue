<script setup lang="ts">
import axios from 'axios';

definePageMeta({
  middleware: ["auth"]
});

// interface User {
//   id : number,
//   name: string,
//   email: string,
//   email_verified_at : Date | null,
//   two_factor_secret : string | null,
//   two_factor_recovery_codes : string | null,
//   two_factor_confirmed_at : Date | null
//   created_at : Date,
//   updated_at : Date
// }

const {getUser, user} = useAuth();

onMounted(async ()=> {
  //getUserData()
  if (user.value === null) {
    user.value = await getUser();
  }
  else {
    return;
  }
})

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
