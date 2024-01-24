<script setup lang="ts">
import axios from 'axios';
onMounted(()=> {
  getUserData()
})

const userData : {name: string, email: string} = reactive({
  name: "",
  email: ""
});


const getUserData = async () => {
  try { 
    const res = await axios.get("/user");
    console.log(res);
    const {data} = res;
    userData.name = data.name;
    userData.email = data.email;

  }catch(error){
    console.error(error);
  }
}
</script>
<template>
  <p><strong>User Name:</strong> {{ userData.name }}</p>
  <p><strong>User Email:</strong> {{ userData.email }}</p>
</template>
