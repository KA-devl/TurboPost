<template>
    <form @submit.prevent="login" class="h-full w-full py-16 px-4 parent">
      <div class="flex flex-col items-center justify-center ">
        <img src="../assets/images/activfit_new_logo.png" class="w-60" />
  
        <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-8">
          <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Not a member yet?
            <router-link
              class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-indigo-500 cursor-pointer"
              :to="{ name: 'Register' }">Signup here</router-link>
          </p>
  
          <div class="mt-7">
            <div id="alert-3" class="flex p-4 mb-4 bg-green-100 rounded-lg " role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 " fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"></path>
              </svg>
  
              <div class="ml-3 text-sm font-medium text-green-700 ">
                <span class="font-bold"> Demo account </span> <br> Email: anes1989@live.ca <br> Password: Test123
              </div>
            </div>
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
  
          <div class="w-full flex items-center justify-between py-5 mt-5">
            <hr class="w-full bg-gray-400" />
            <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
            <hr class="w-full bg-gray-400  " />
          </div>
          <button @click.prevent aria-label="Continue with google" role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-5 hover:bg-gray-100">
            <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                fill="#3b5998" />
            </svg>
            <p class="text-base font-medium ml-4 text-gray-700">
              LOG IN WITH FACEBOOK
            </p>
          </button>
  
          <button @click.prevent aria-label="Continue with google" role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-5 hover:bg-gray-100">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
            <p class="text-base font-medium ml-4 text-gray-700">
              LOG IN WITH GOOGLE
            </p>
          </button>
  
        </div>
      </div>
    </form>
  </template>
  
  <script>
  import { ref } from "vue";
  import { supabase } from "../supabase/init";
  import { useRouter } from "vue-router";
  import { useToast } from "vue-toastification";

  export default {
    components: {  },
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
    background-image: url("../assets/images/fitness-background.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  
  </style>