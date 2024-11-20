import {ref, computed} from 'vue';
import { defineStore } from 'pinia';
import { useBebidasStore } from './bebidas';
import { useFavoritosStore } from './favoritos';


export const useModalStore = defineStore('modal', ()=>{
    
    const modal = ref(false);
    const favoritos = useFavoritosStore();
    const bebidas = useBebidasStore();

    function handleClickModal(){
        modal.value = !modal.value
    }

   /*  const textoBoton = computed(()=>{
        return favoritos.existeFavorito(bebidas.receta.idDrink) ? 'Eliminar' : 'Agregar'
    }) */



    return{
        modal,
        //textoBoton,
        handleClickModal
    }

})