import { defineStore } from "pinia";
import {onMounted, ref, reactive} from 'vue';
import bebidaServices from "@/services/bebidaServices";

export const useBebidasStore = defineStore('bebidas', ()=>{

    const categorias = ref([]);
    const busqueda = reactive({
        nombre:'',
        categoria: ''
    })

    const recetas = ref([]);

    onMounted(async()=>{
        const {data:{drinks}} = await bebidaServices.obtenerCategorias()

        
        categorias.value = drinks;
    
    })

    async function obtenerRecetas(){
        const {data:{drinks}} = await bebidaServices.buscarRecetas(busqueda)
        recetas.value = drinks;
        console.log(recetas);
    }



    return {
        categorias,
        busqueda,
        recetas,
        obtenerRecetas
    }

})