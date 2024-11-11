<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import {computed} from 'vue';
import {useBebidasStore} from '../stores/bebidas'


const route = useRoute()
const paginaInicio = computed(()=> route.name === 'inicio')

const store = useBebidasStore()
console.log(store.categorias);

</script>
<template>
    <header 
        class="bg-slate-800"
        :class="{header:paginaInicio}"    
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
                <div>
                    <RouterLink :to="{name:'inicio'}">
                        <img 
                            src="/img/logo.svg"
                            alt="img-logo"
                            class="w-32"
                        >
                    </RouterLink>
                </div>
                <nav>
                    <RouterLink 
                        :to="{name:'inicio'}"
                        class="font-bold text-white"
                        active-class="text-orange-500"
                    >
                        Inicio
                    </RouterLink>
                    <RouterLink 
                        :to="{name:'favoritos'}"
                        class="font-bold text-white"
                        active-class="text-orange-500"
                    >
                        Favoritos
                    </RouterLink>
                </nav>
            </div>
            <form 
                v-if="paginaInicio"
                class="md:w-1/2 xl:w-1/3 bg-orange-400 p-10 rounded-lg shadow-md space-y-6 mt-6"
            >
                <div class="space-y-4">
                    <label 
                        for="ingrediente"
                        class="block text-white uppercase font-bold"
                    >
                        Nombre o Ingredinetes
                    </label>
                    <input 
                        type="text"
                        id="ingrediente"
                        placeholder="Nombre o Ingredientes"
                        class="rounded-md px-2 w-full"    
                    >
                </div>
                <div class="space-y-4">
                    <label 
                        for="categioria"
                        class="block text-white uppercase font-bold"
                    >
                        categoria
                    </label>
                    <select 
                        name=""
                        id="categioria"
                        class="px-2 rounded-md w-full"
                    >
                        <option value="">--Seleccione--</option>
                    </select>
                </div>
                <input 
                    type="submit"
                    value="buscar receta"
                    class="capitalize bg-white p-2 w-full rounded-md font-bold cursor-pointer hover:bg-orange-600 hover:text-white transition "
                >
            </form>
        </div>
    </header>
</template>
<style>
    .header{
        background-image: url('/img/bg.jpg');
        background-size: cover;
        background-position: center;
    }
</style>



