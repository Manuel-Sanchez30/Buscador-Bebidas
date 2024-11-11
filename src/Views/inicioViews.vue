<script setup>
import Receta from '@/components/Receta.vue';
import { useBebidasStore } from '@/stores/bebidas';

const bebidas = useBebidasStore()

</script>
<template>
    <h1 class="text-6xl font-bold ">Recetas</h1>
    <div class="grid grid-cols-3 md:grid-cols-4 mt-10 gap-10 mb-4">
        <Receta
            v-for="receta in bebidas.recetas"
            :key="receta.idDrink"
            :receta="receta"
        
        />

    </div>
</template>



