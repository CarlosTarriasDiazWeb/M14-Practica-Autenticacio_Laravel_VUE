<script setup lang="ts">

import axios from 'axios';
definePageMeta({
  layout: "centered",
  middleware: ["guest"]
});

const {register, formDataRegister} = useAuth();
// const router = useRouter()

// interface RegisterData {
//   name: string,
//   email: string,
//   password: string,
//   passwordConfirm: string
// }

// const formData = ref<RegisterData>({
//   name: "",
//   email: "",
//   password: "",
//   passwordConfirm:""
// });

// const register = async ()=> {

//   let payload : FormData = new FormData();
//   payload.append('name', formData.value.name);
//   payload.append('email', formData.value.email);
//   payload.append('password', formData.value.password);
//   payload.append('password_confirmation', formData.value.passwordConfirm);

//   //password_confirmation is needed for laravel fortify validation rules for password.
  
//   if (formData.value.password !== formData.value.passwordConfirm){
//     return;
//   }

//   //Com que tenim plugin no fa falta indicar el començament de la URL
//   try { 
//     const res= await axios.post("/register", payload)
//     console.log(res);
//     router.push('/me');
//   }catch(error){
//     console.error(error);
//   }
  
//}

</script>
<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="register" novalidate>
      <label>
        <div>Name</div>
        <input v-model.trim="formDataRegister.name" type="text" />
      </label>

      <label>
        <div>Email</div>
        <input v-model.trim="formDataRegister.email" type="email" />
      </label>

      <label>
        <div>Password</div>
        <input v-model.trim="formDataRegister.password" type="password" />
      </label>

      <label>
        <div>Confirm Password</div>
        <input v-model.trim="formDataRegister.passwordConfirm" type="password" />
      </label>

      <button type="submit" class="btn">Register</button>
    </form>

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
    {{ formDataRegister }}
  </div>
</template>
