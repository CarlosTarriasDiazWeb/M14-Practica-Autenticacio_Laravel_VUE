<script setup lang="ts">
import axios from 'axios';
definePageMeta({
  layout: "centered",
});

const router = useRouter()

interface loginData {
  email: string,
  password : string
}

const formData = ref<loginData>({
  email: "",
  password: "",
});

const login = async ()=> {

  let payload = new FormData();
  payload.append('email', formData.value.email);
  payload.append('password', formData.value.password);

  if (formData.value.email.length < 0 || formData.value.password.length < 0){
    return;
  }

  //Pel plugin no fa falta indicar el començament de la URL
  try { 
    const res = await axios.post("/login", payload);
    console.log(res);
    router.push('/me');
  }catch(error){
    console.error(error);
  }
}

</script>
<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login" novalidate>
      <label>
        <div>Email</div>
        <input v-model.trim="formData.email" type="email" />
      </label>
      <label>
        <div>Password</div>
        <input v-model.trim="formData.password" type="password" />
      </label>
      <button type="submit" class="btn">Login</button>
    </form>
    {{ formData }}
    <p>
      Don't have an account?
      <NuxtLink class="underline text-lime-600" to="/register"
        >Register now!</NuxtLink
      >
    </p>
  </div>
</template>
