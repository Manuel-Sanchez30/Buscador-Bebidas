import {defineStore} from 'pinia';
import { useBebidasStore } from './bebidas';
import { ref, onMounted, watch } from 'vue';



export const useFavoritosStore = defineStore('favotiros', ()=>{


    const bebidas = useBebidasStore();
    const favorito = ref([]);

    onMounted(()=>{
        favorito.value = JSON.parse(localStorage.getItem('favorito')) ?? []
    })

    watch(favorito, ()=>{
        sincronizarLocalStorage()
    },{
        deep: true,
    })

    function sincronizarLocalStorage  (){
        localStorage.setItem('favorito', JSON.stringify(favorito.value));
    }

   /*  function existeFavorito(id){
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favorito')) ?? []

        return favoritosLocalStorage.some(favorito => favorito.idDrink === id)
    }     */

    function handleClickFavoritos (){
        if(existeFavorito(bebidas.receta.idDrink)){
            console.log('ya existe');
        }else{
            favorito.value.push(bebidas.receta)
        }
    }


    /* function eliminarFavorito(){

        favorito.value = favorito.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)

    } */


    return {
        favorito,
        handleClickFavoritos,
        sincronizarLocalStorage,
        //existeFavorito
    }

})