<script setup lang="ts">
import {RegisterData} from '~~/types';
import type {FormKitNode} from '@formkit/core';
import { handleInvalidForm } from '~~/utils';

definePageMeta({
  layout: "centered",
  middleware: ["guest"]
});

const {register} = useAuth();

const handleRegister = async (payload: RegisterData,node?:FormKitNode) => {
  try {
    await register(payload)
  }catch(error) {
    handleInvalidForm(error, node);
  }
}

</script>
<template>
  <div class="register">
    <h1>Register</h1>
    <FormKit type="form" submit-label="Register" @submit="handleRegister">
      <FormKit label="Name" name="name" type="text"/>
      <FormKit label="Email" name="email" type="email"/>
      <FormKit label="Password" name="password" type="password"/>
      <FormKit label="Confirm Password" name="password_confirmation" type="password"/>
    </FormKit>
    <!-- <form @submit.prevent="register" novalidate>
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
    </form> -->

    <p>
      Already have an account?
      <NuxtLink class="underline text-lime-600" to="/login">Login</NuxtLink>
    </p>
   
  </div>
</template>
