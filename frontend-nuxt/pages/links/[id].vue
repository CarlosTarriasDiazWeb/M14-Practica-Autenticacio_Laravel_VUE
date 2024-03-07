<script setup lang="ts">
import { Link } from '~~/types';
import type {FormKitNode} from '@formkit/core';

definePageMeta({
  middleware: ["auth"]
});

const {find, link, update} = useLinks();

const fullLink = ref<string | undefined>("");
const shortLink = ref<string| undefined>("");

onMounted(async ()=> {
   await find(useRoute().params.id as string);
   fullLink.value = link.value?.full_link;
   shortLink.value = link.value?.short_link;
});

async function handleUpdate(payload:Partial<Link>, node?:FormKitNode){
  try {
    await update(Number(useRoute().params.id),payload)
    useRouter().back();
  } catch (error) {
    handleInvalidForm(error,node);
  }
}


</script>
<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Update Link" @submit="handleUpdate">
    <FormKit v-model="shortLink" type="text" name="short_link" label="Short Link">
    </FormKit>
    <FormKit v-model="fullLink" type="url" name="full_link" label="Full Link"></FormKit>
  </FormKit>
  <!-- <form>
    <label>
      <div>Short Link</div>
      <input type="text" />
    </label>

    <label>
      <div>Full Link</div>
      <input type="text" />
    </label>

    <button class="btn">Update Link</button>
  </form> -->
</template>
