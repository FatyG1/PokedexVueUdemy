<script setup>
import { storeToRefs } from 'pinia';
import {useFavoritosStore} from '../store/favoritos'

const useFavoritos = useFavoritosStore()

const {favoritos} = storeToRefs(useFavoritos)
const {remove} = useFavoritos

</script>
<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li class="list-group-item"
            v-for = "poke in favoritos"
            :key="poke.id">
            <div>
                {{ poke.name }}    
            </div>
            <div>
                <router-link 
                    class="btn btn-sm btn-primary me-2" 
                    :to="`/pokemons/${poke.name}`">
                    Mas info
                </router-link>  
                <button class="btn btn-sm btn-danger " 
                    @click="remove(poke.id)">
                    Borrar</button>
                   
            </div>
        </li>
    </ul>
</template>