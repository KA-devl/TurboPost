<template>


    <form @submit.prevent="login" class="h-screen w-screen  px-4  parent">
      <Navbar />
      <div class="flex flex-col items-center justify-center ">
  
        <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-8">
          <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Employee Portal
          </p>
          <!-- <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Not a member yet?
            <router-link
              class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-indigo-500 cursor-pointer"
              :to="{ name: 'Register' }">Signup here</router-link>
          </p> -->
  
          <div class="mt-7">
            <label id="email" class="text-sm font-medium leading-none text-gray-800">
  
            </label>
            <input aria-labelledby="email" type="email"
              class="bg-gray-200 border rounded-lg  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              v-model="email" placeholder="Username or Email" />
          </div>
          <div class="w-full">
            <label for="pass" class="text-sm font-medium leading-none text-gray-800">
            </label>
            <div class="relative flex items-center justify-center">
              <input id="pass" :type="showPassword ? 'text' : 'password'"
                class="bg-gray-200 border rounded-lg  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                v-model="password" placeholder="Password" />
              <!-- hide or show password-->
              <div class="absolute right-0 mt-2 mr-3 cursor-pointer" @click="showPassword = !showPassword">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport">
              </div>
  
            </div>
  
          </div>
  
          <!-- <p class="mt-2 text-center">
            <router-link
              class="hover:text-indigo-500 focus:text-indigo-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-500 cursor-pointer"
              :to="{ name: 'ForgotPassword' }">Forgot password?</router-link>
          </p> -->
          <div class="mt-8">
            <button type="submit"
              class="focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-500 border rounded-lg hover:bg-indigo-700 py-4 w-full">
              LOG IN
            </button>
          </div>
  
  
        </div>
      </div>
    </form>
    <Footer/>
  </template>
  
  <script>
  import { ref } from "vue";
  import { supabase } from "../supabase/init";
  import { useRouter } from "vue-router";
  import { useToast } from "vue-toastification";
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer.vue";

  export default {
    components: { Navbar, Footer },
    setup() {
  
      const toast = useToast();
  
      const router = useRouter();
  
      const email = ref(null);
      const password = ref(null);
      // const errorMsg = ref(null);
      const showPassword = ref(false);
      const isPasswordValid = ref(false);
      const isEmailValid = ref(false);
  
      const validateEmail = (email) => {
        if (email) {
          //email should have the right @ format
          isEmailValid.value = true;
  
        } else {
          // errorMsg.value = 'Email field cannot be empty';
          // setTimeout(() => {
          //   errorMsg.value = null;
          // }, 5000)
          toast.error("Email field cannot be empty", {
            timeout: 4000
          })
        }
      }
  
      const validatePassword = (password) => {
        if (password) {
          isPasswordValid.value = true;
  
        } else {
          // errorMsg.value = 'Password field cannot be empty';
          // setTimeout(() => {
          //   errorMsg.value = null;
          // }, 5000)
          toast.error("Password field cannot be empty", {
            timeout: 4000
          })
        }
      }
  
  
  
      // Login
      const login = async () => {
        validateEmail(email.value);
        validatePassword(password.value);
  
        if (isEmailValid.value && isPasswordValid.value) {
          try {
            let response = await supabase.auth.signIn({
              email: email.value,
              password: password.value,
            });
            if (response.error) throw response.error;
            console.log("LOGGED IN!");
            router.push({ name: "Dashboard" });
          } catch (error) {
            // errorMsg.value = error.message;
            // setTimeout(()=>{
            // errorMsg.value = null;
            // },5000)
            toast.error(error.message, {
              timeout: 4000
            })
          }
        }
  
      };
  
      return { showPassword, email, password, login, isEmailValid, isPasswordValid, validateEmail, validatePassword };
    },
  };
  </script>
  <style scoped>
  .parent {
    background-image: url("https://images.pexels.com/photos/4175032/pexels-photo-4175032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  
  </style>