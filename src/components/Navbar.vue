<template>
    <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
    <nav class="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto " aria-label="Global">
      <div class="flex items-center justify-between">
        <img src="../assets/turbopost.png" alt="">
        <div class="md:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm  0 " data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
        <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
            <router-link :to="{ name: 'HomePage' }"><span class="font-medium text-gray-500 hover:text-gray-400 md:py-6 ">Home</span></router-link>
            <router-link v-if="!user" :to="{ name: 'EstimatePackage' }"><span class="font-medium text-gray-500 hover:text-gray-400 md:py-6 ">Estimate Package</span></router-link>
            <router-link v-if="user" :to="{ name: 'Dashboard' }"><span class="font-medium text-gray-500 hover:text-gray-400 md:py-6 ">Dashboard</span></router-link>
            <router-link v-if="!user" :to="{ name: 'ContactUs' }"><span class="font-medium text-gray-500 hover:text-gray-400 md:py-6 ">Contact Us</span></router-link>
          <a v-if="!user" class="font-medium text-gray-500 hover:text-gray-400 md:py-6" href="#">FAQ</a>
          <a v-if="!user" class="font-medium text-gray-500 hover:text-gray-400 md:py-6 " href="#">Blog</a>
  
        
  
         <router-link v-if="!user" :to="{name :'Login'}">
            <span class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6  " href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
            Employee portal
        </span>
        
        </router-link>

        <span v-if="user" @click="logout">
            <button class="flex items-center gap-x-2 pointer font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 " href="#">
            Log out
            </button>
        
    </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '../store/user';
import { supabase } from "../supabase/init";
import { useRouter } from "vue-router";

export default {
    setup(){
        const store = useUserStore();
    const router = useRouter();
    const user = computed(() => {
      return store.userState.user;
    });

    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: "Login" });
    };

    return { logout,user };
    }
}




</script>