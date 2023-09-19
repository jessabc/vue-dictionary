<script setup>
import { ref } from 'vue';
import axios from 'axios'

    const query = ref('')

    const emit = defineEmits(['word-definition', 'error-msg', 'loading'])

    const getWordDefinition = async () => {
        emit('word-definition')
        emit('loading')
        emit('error-msg')

        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query.value}`)
            emit('word-definition', response.data[0])
        }catch(err) {
            emit('error-msg', err.response.data)
        }finally{
            query.value = ''
            emit('loading')
        }
    }

</script>

<template>
    <form  class="relative mt-10">
        <input 
            type="text" 
            class="bg-zinc-200 w-full py-4 rounded-lg pl-5 text-lg font-semibold outline-none 50" 
            v-model="query"  
            placeholder="Search for a word..." 
        >
        <button @click.prevent="getWordDefinition">
            <div className='absolute right-0 top-0 hover:bg-zinc-300 px-7 h-full rounded-tr-lg rounded-br-lg'>
            <img src="../assets/icon-search.svg" alt="magnifying glass" class='absolute right-5 top-5'>
         </div>
        </button>
    </form>
</template>


