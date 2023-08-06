<script setup>
import {RouterLink} from 'vue-router'
import { ref, reactive, computed } from 'vue'
import router from '../router'

const user = reactive(

    {
            id:1,
            email: 'syednuman10@gamil.com',
            password: '1234',

    },

)



const email = ref('')
const password = ref('')

function login(email, password) {

  if (email === this.user.email && password === this.user.password) {
    alert('Login Success')
    this.router.push('/dashboard')

  } else {
    alert('Login failed')
  }

}

</script>


<template>

<div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
      <h2 class="mb-5 text-xl">Login</h2>
      <p>There is storage or endpoint so use email = syednuman10@gamil.com and password=1234  for login</p>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <!-- {{ email }} -->
            <input required v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input v-model="password" class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>

          <div class="flex items-center justify-between">
            <RouterLink to="/login">
            <button @click.prevent="login(email,password)" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Log In
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