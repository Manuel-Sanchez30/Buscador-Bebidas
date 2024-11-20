<script setup>
import { useFavoritosStore } from '@/stores/favoritos';
import Receta from '../components/Receta.vue';


const favoritos = useFavoritosStore();


</script>
<template>
    <h1 class="text-6xl font-bold ">Favoritos</h1>
    <div class="grid grid-cols-3 md:grid-cols-4 mt-10 gap-10 mb-4">
        <Receta
            v-for="receta in favoritos.favorito"
            :key="receta.idDrink"
            :receta="receta"
        />

    </div>
</template>


