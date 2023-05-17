<script setup>
    import {useRoute, useRouter} from 'vue-router'
    import {useGetData} from '../composables/getData'
    import {useFavoritosStore} from '../store/favoritos'
    
    const route = useRoute() //Se usa para hacer que se pueda usar una ruta dinámica en axios.get
    const router = useRouter() //Para llevar al usuario directamente a la ruta que queremos, se puede escribir en el script
    const useFavoritos = useFavoritosStore()

    const {add, findPoke} = useFavoritos

    const {data, loading,  getData, error} = useGetData();

    const back = () => {
        router.push(`/pokemons`)
    }

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>
<template>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">No existe el Pokemon</div>
    <div v-if="data">
        <!--La interrogación despues del sprites hace que se pinte la info a posteriori y si
        no existe no lo pinta. Para evitar errores al intentar pintarlo antes de llamar a la api-->
        <img :src="data.sprites?.front_default" >
        <h1>Poke name: {{ $route.params.name }}</h1>
        <button :disabled="findPoke(data.name)" class="btn btn-primary mb-2"  @click="add(data)">Agregar favoritos</button>
    </div>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
