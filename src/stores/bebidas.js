import { defineStore } from "pinia";
import {onMounted, ref, reactive} from 'vue';
import bebidaServices from "@/services/bebidaServices";
import { useModalStore } from "./modal";

export const useBebidasStore = defineStore('bebidas', ()=>{

    const modal = useModalStore()
    const categorias = ref([]);
    const busqueda = reactive({
        nombre:'',
        categoria: ''
    })

    const recetas = ref([]);
    const receta = ref({});

    onMounted(async()=>{
        const {data:{drinks}} = await bebidaServices.obtenerCategorias()        
        categorias.value = drinks;    
    })

    async function obtenerRecetas(){
        const {data:{drinks}} = await bebidaServices.buscarRecetas(busqueda)
        recetas.value = drinks;
        console.log(recetas);
    }

    async function seleccionarBebida(id){
        const {data:{drinks}} = await bebidaServices.buscarReceta(id)
        receta.value = drinks[0];

        modal.handleClickModal()
    }



    return {
        categorias,
        busqueda,
        recetas,
        receta,
        obtenerRecetas,
        seleccionarBebida
    }

})