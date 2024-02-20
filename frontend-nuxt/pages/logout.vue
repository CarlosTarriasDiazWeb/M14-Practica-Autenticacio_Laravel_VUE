<script setup lang="ts">
import axios from 'axios';

const router = useRouter()
const {logOut} = useAuth();

onMounted(()=> {
  logOut();
  //router.push('/login');
})

// const logOut = async () => {
//   try { 
//     const res = await axios.post("/logout");
//     console.log(res);
    

//   }catch(error){
//     console.error(error);
//   }
// }

</script>
<template>
  <div>Logging Out...</div>
</template>
