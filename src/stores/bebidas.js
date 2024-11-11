import { defineStore } from "pinia";
import {onMounted, ref} from 'vue';
import bebidaServices from "@/services/bebidaServices";

export const useBebidasStore = defineStore('bebidas', ()=>{

    const categorias = ref([]);

    onMounted(async()=>{
        const {data:{drinks}} = await bebidaServices.obtenerCategorias()

        console.log(drinks);
        categorias.value = drinks;
    
    })


    return {
        categorias
    }

})