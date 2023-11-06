<template >
    <form @submit.prevent="register" class="h-full  py-16 px-4 parent">
      <div class="flex flex-col items-center justify-center ">
        <img src="../assets/images/activfit_new_logo.png" class="w-60" />
  
        <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-8">
          <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
            Create a new account
          </p>
          <p tabindex="0" class="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
            Already a member?
            <router-link
              class="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-indigo-500 cursor-pointer"
              :to="{ name: 'Login' }">Login here</router-link>
          </p>
          <div class="mt-7">
            <label id="username" class="text-sm font-medium leading-none text-gray-800">
  
            </label>
            <input type="username"
              class="bg-gray-200 border rounded-lg  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              v-model="username" placeholder="Username" />
          </div>
          <div>
            <label id="email" class="text-sm font-medium leading-none text-gray-800">
  
            </label>
            <input type="email"
              class="bg-gray-200 border rounded-lg  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              v-model="email" placeholder="johndoe@email.com" />
          </div>
          <div class="w-full">
            <label for="password" class="text-sm font-medium leading-none text-gray-800">
            </label>
            <div class="relative flex items-center justify-center">
              <input id="password" type="password"
                class="bg-gray-200 border rounded-lg text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                v-model="password" placeholder="Password" />
              <!--
                                <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport">                                    
                              </div>
                              -->
            </div>
  
          </div>
          <div class="w-full">
            <label for="confirmPassword" class="text-sm font-medium leading-none text-gray-800">
            </label>
            <div class="relative flex items-center justify-center">
              <input id="confirmPassword" type="password"
                class="bg-gray-200 border rounded-lg  text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                v-model="confirmPassword" placeholder="Confirm password" />
  
  
            </div>
  
  
  
          </div>
          <!-- <div class="mt-2">
            <ErrorNotification v-if="errorMsg" :errorMsg="errorMsg" />
          </div> -->
  
          <div class="mt-8">
            <button type="submit"
              class="focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-500 border rounded-lg hover:bg-indigo-700 py-4 w-full">
              REGISTER
            </button>
          </div>
  
        </div>
      </div>
    </form>
  
  </template>
  
  <script>
  import { ref } from 'vue';
  import { supabase } from '../supabase/init';
  import { useRouter } from 'vue-router';
  // import ErrorNotification from '../components/ErrorNotification.vue';
  import { useToast } from "vue-toastification";
  export default {
    components: { },
    setup() {
      const toast = useToast();
      const router = useRouter()
      const username = ref(null)
      const email = ref(null)
      const password = ref(null)
      const confirmPassword = ref(null)
      const errorMsg = ref(null);
  
  
  
      // Register
      const register = async () => {
        if (username && (password.value === confirmPassword.value)) {
          try {
            let response = await supabase.auth.signUp({
              email: email.value,
              password: password.value,
            },
              {
                data: {
                  username: username.value,
                }
              });
            if (response.error) throw response.error;
            toast.success("Successfully Registered!", {
            timeout: 4000
          })
            router.push({ name: 'Login' })
          } catch (error) {
            // errorMsg.value = error.message;
            // setTimeout(() => {
            //   errorMsg.value = null
            // }, 6000)
            toast.error(error.message, {
            timeout: 4000
          })
          }
          return;
        }
        else {
          if (password.value !== confirmPassword.value) {
            // errorMsg.value = "Passwords do not match"
            // setTimeout(() => {
            //   errorMsg.value = null
            // }, 6000)
            toast.error("Passwords do not match", {
            timeout: 4000
          })
          } if (!username.value) {
            // errorMsg.value = "Username cannot be empty"
            // setTimeout(() => {
            //   errorMsg.value = null
            // }, 6000)
            toast.error("Username cannot be empty", {
            timeout: 4000
          })
          }
        }
      }
  
      return { username, email, password, confirmPassword, errorMsg, register };
    },
  };
  </script>
  <style scoped>
  .parent {
    background-image: url("../assets/images/fitness-background2.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  </style>