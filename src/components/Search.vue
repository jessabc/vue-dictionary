<script setup>
import { useQueryStore } from '../store/query'
import { storeToRefs } from 'pinia';

    const store = useQueryStore()
    const { query } = storeToRefs(store)  
    const {getWordDefinition} = store

</script>

<template>
    <form  class="relative mt-10">
        <input 
            type="text" 
            class="bg-zinc-200 w-full py-4 rounded-lg pl-5 text-lg font-semibold outline-none 50" 
            v-model="query.text"  
            placeholder="Search for a word..." 
        >
        <button @click.prevent="getWordDefinition">
            <div className='absolute right-0 top-0 hover:bg-zinc-300 px-7 h-full rounded-tr-lg rounded-br-lg'>
            <img src="../assets/icon-search.svg" alt="magnifying glass" class='absolute right-5 top-5'>
         </div>
        </button>
    </form>
</template>


