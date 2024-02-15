<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
});

</script>
<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>
  <FormKit type="form" submit-label="Create Link">
    <FormKit label="Link" type="url" name="full_link"></FormKit>
  </FormKit>
  <!-- <form>
    <label>
      <div>Link</div>
      <input type="text" name="full_link" />
    </label>
    <button class="btn">Create Link</button>
  </form> -->
</template>
