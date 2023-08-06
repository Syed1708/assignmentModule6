<script setup>
// import { ref, reactive, computed } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'



  


</script>

<template>

  
  <section class="flex h-screen w-full">


<div class="w-1/2" style="background-image: url(https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80); background-repeat: no-repeat; background-size: cover;">

<Navbar></Navbar>

</div>

<RouterView></RouterView>
  </section>
</template>
<style scoped>
</style>