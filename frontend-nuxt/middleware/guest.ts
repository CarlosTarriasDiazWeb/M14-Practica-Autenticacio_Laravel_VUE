export default defineNuxtRouteMiddleware(async (to, from) => {
    
    const {user, initUser} = useAuth();
    await initUser();

    // const { data : user } = await axios.get("/user")
    if (user.value) {
        return navigateTo("/me")
    }
    
})