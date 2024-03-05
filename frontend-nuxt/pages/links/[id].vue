<script setup lang="ts">
import { Link } from '~~/types';

definePageMeta({
  middleware: ["auth"]
});

const {find} = useLinks();
const link = ref<Link>();

onMounted(async ()=> {
  const findLink = await find(useRoute().params.id as string);
  //link.value = ref<Link>(findLink);
});


</script>
<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Update Link">
    <FormKit v-model="link?.short_link" type="text" name="short_link" label="Short Link">
    </FormKit>
    <FormKit type="url" name="full_link" label="Full Link"></FormKit>
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
