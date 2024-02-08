<script setup lang="ts">
import axios from 'axios';

definePageMeta({
  middleware: ["auth"]
});

const {getUser, user} = useAuth();

onMounted(async ()=> {
  //getUserData()
  //Evitem fer la crida si l'usuari ja ha iniciat sessió.
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
