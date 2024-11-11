<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';


</script>

<template>
  <Header/>
  <main class="mx-auto container mt-10">
    
    <RouterView/>

  </main>
</template>


