<script setup>
import { storeToRefs } from 'pinia';
import {useCounterStore} from '../store/counter.js'
const useCounter = useCounterStore()

const {increment} = useCounter
//Para hacer la desestructuracion de ref o de computed se llama a storeToRefs
const {count, double} = storeToRefs(useCounter)
</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increment">increment</button>
</template>
