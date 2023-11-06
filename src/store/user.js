import { defineStore } from 'pinia'
import { reactive } from 'vue';

export const useUserStore= defineStore('user', ()=>{
  const userState = reactive({
    user:null
  });

  const methods = {
    setUser(payload){
      userState.user = payload ? payload.user : null;
    }
  }

  return {userState,methods }
})