import axios, {AxiosError} from "axios";
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    const {user, getUser} = useAuth();
    user.value = await getUser();

    // const { data : user } = await axios.get("/user")
    if (user.value !== null) {
        return navigateTo("/me")
    }
    
})