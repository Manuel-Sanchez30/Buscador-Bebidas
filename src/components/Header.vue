<script setup>

</script>
<template>
    <header>
        <div class="mx-auto container px-5 py-16">
            <div>

            </div>
            <form
                class="md:w-1/2 xl:w-1/3 bg-orange-400 p-10 rounded-lg shadow-md space-y-6"
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



