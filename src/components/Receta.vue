import Receta from '@/components/Receta.vue';
<script setup>
    defineProps({
        receta:{
            type: Object,
        }
    })
</script>

<template>
    <div>
        <div>
            <img :src="receta.strDrinkThumb" :alt="'imagen de ' + receta.strDrink">
        </div>
        <div>
            <h3 class="truncate text-center font-bold">{{ receta.strDrink }}</h3>
            <button 
                type="button"
                class="w-full bg-orange-600 rounded-md font-bold text-white hover:bg-orange-800"
                
            >
                Ver Receta
            </button>
        </div>
    </div>
</template>


