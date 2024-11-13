<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';


</script>

<template>
  <Header/>
  <main class="mx-auto container mt-10">
    <Modal/>
    <RouterView/>

  </main>
</template>


