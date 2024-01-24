<script setup lang="ts">

import axios from 'axios';
definePageMeta({
  layout: "centered",
});

const formData = ref({
  name: "",
  email: "",
  password: "",
  passwordConfirm:""
});

const register = async ()=> {

  let payload = new FormData();
  payload.append('name', formData.value.name);
  payload.append('email', formData.value.email);
  payload.append('password', formData.value.password);
  payload.append('password_confirmation', formData.value.passwordConfirm);

  //password-confirmation is needed for laravel fortify validation rules for password.
  
  if (formData.value.password !== formData.value.passwordConfirm){
    return;
  }

  //Pel plugin no fa falta indicar el començament de la URL
  try { 
    const res=await axios.post("/register",payload)
    console.log(res)
  }catch(error){
    console.error(error);
  }
  
  // axios.post('http://localhost/api/register', payload,{
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then((response) =>{
  //   console.log(response.data);
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
}

</script>
<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register" novalidate>
      <label>
        <div>Name</div>
        <input v-model.trim="formData.name" type="text" />
      </label>

      <label>
        <div>Email</div>
        <input v-model.trim="formData.email" type="email" />
      </label>

      <label>
        <div>Password</div>
        <input v-model.trim="formData.password" type="password" />
      </label>

      <label>
        <div>Confirm Password</div>
        <input v-model.trim="formData.passwordConfirm" type="password" />
      </label>

      <button type="submit" class="btn">Register</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
    {{ formData }}
  </div>
</template>
