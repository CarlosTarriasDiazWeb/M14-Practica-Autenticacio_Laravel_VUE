import axios from "axios"

interface loginData {
    email: string,
    password : string
}


interface RegisterData {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string
}

interface User {
  id : number,
  name: string,
  email: string,
  email_verified_at : Date | null,
  two_factor_secret : string | null,
  two_factor_recovery_codes : string | null,
  two_factor_confirmed_at : Date | null
  created_at : Date,
  updated_at : Date
}

export async function getUser(): Promise<User|null> {
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

    const formData = ref<loginData>({
        email: "",
        password: "",
      });
    
    const router = useRouter();

    const formDataRegister = ref<RegisterData>({
      name: "",
      email: "",
      password: "",
      passwordConfirm:""
    });

    const register = async ()=> {

      let payload : FormData = new FormData();
      payload.append('name', formDataRegister.value.name);
      payload.append('email', formDataRegister.value.email);
      payload.append('password', formDataRegister.value.password);
      payload.append('password_confirmation', formDataRegister.value.passwordConfirm);
    
      //password-confirmation is needed for laravel fortify validation rules for password.
      
      if (formData.value.password !== formDataRegister.value.passwordConfirm){
        return;
      }
    
      //Pel plugin no fa falta indicar el començament de la URL
      try { 
        const res= await axios.post("/register", payload)
        console.log(res);
        router.push('/me');
      }catch(error){
        console.error(error);
      }
      
    }

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

      const logOut = async () => {
        try { 
          const res = await axios.post("/logout");
          console.log(res);
        }catch(error){
          console.error(error);
        }
      }

     

      return {
        login, logOut, formData, formDataRegister, register, user, getUser
      }
}