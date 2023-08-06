<script setup>
import {RouterLink} from 'vue-router'
import router from '../router'
import { ref, reactive, computed } from 'vue'
import axios from 'axios'




// const user = reactive({
//             isRegistered: false,
//             isLoggedIn: false,
//               email: '',
//               password: '',
//               confirmpassword: '',
//               registrationAlert: '',
//               loginAlert: '',
              
//           })

const email = ref('')
const password = ref('')
const confirmpassword = ref('')
        
function submitHaldler() {
  //console.log('Submited')

  // const data = {
  //   email : this.email,
  //   password: this.password,
  //   confirmpassword: this.confirmpassword
  // }

  if(this.email !== '' && this.password !=='' && this.confirmpassword !==''){
    
    if(this.password == this.confirmpassword){
      alert('Success')

    this.router.push('/login')
    }else{
      alert('Passord not match')
    }

  }else{
    alert('All fileds are required')
  }

  // //console.log(data)
  // axios.post('http://localhost:5173/register', data)
  // .then(resposne=>{
  //   console.log(resposne)
  // }).catch(err=>{
  //   console.log(err)
  // })



}

//         function registration(email) {
//           console.log(email)
//           console.log(password)

          
//           localStorage.setItem('user', JSON.stringify({ 
//           email: this.email, password: this.password }));
//           this.isRegistered = true;
//           this.registrationAlert = 'Registration successful! You can now log in.';
          

//             }



</script>


<template>

<div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
      <h2 class="mb-5 text-xl">Registration</h2>
      <div class="w-full max-w-xs">

        <form  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
 
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            
            <input 
            v-model="email"
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
             id="email" type="email"  placeholder="your email">
           <input type="hidden">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
           
            <input 
            v-model="password"
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
             id="password" type="password" placeholder="******************">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmpassword">
             Confirmed Password
            </label>
          
            <input 
            v-model="confirmpassword"
             class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="confirmpassword" type="password" placeholder="******************">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
            <div v-if="password != confirmpassword" class="bg-red-700">Password dose not match</div>
          </div>
          <div class="flex items-center justify-between">
   
          
            <RouterLink to="/register">
            <button @click.prevent="submitHaldler()" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Register
            </button>
            </RouterLink>
 
          </div>
        </form>

        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>



</template>


<style  scoped>

</style>