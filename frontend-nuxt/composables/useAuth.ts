import axios from "axios"
import type {RegisterData, loginData, User} from "@/types";


export async function getUser(): Promise<User|null> {

  if (user.value !== null) return null;

  try {
    const res = await axios.get("/user");
    const user = res.data;
    return {
      ...user,
      created_at: new Date(user.created_at),
      updated_at: new Date(user.updated_at),
      email_verified_at: user.email_verified_at ? new Date(user.email_verified_at) : null,
      two_factor_confirmed_at: user.two_factor_confirmed_at ? new Date(user.two_factor_confirmed_at) : null
    };
    
  } catch (error) {
    return null;
  }
}

export const user = ref<User | null>(null);

export const useAuth = () => {

 
    const router = useRouter();

    const register = async (data:RegisterData)=> {
  
      //password-confirmation is needed for laravel fortify validation rules for password.
      
      const res = await axios.post("/register", data)
      console.log(res);
      router.push('/me');
    }

    const login = async (data:loginData)=> {
        //Pel plugin no fa falta indicar el començament de la URL
        
        const res = await axios.post("/login", data);
        console.log(res);
        router.push('/me');
      }

      const logOut = async () => {
        try { 
          const res = await axios.post("/logout");
          //Eliminem les dades del usuari
          user.value = null;
        }catch(error){
          console.error(error);
        }
      }

      return {
        login, logOut, register, user, getUser
      }
}