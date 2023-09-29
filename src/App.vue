<script setup>
import './style.css'
import Search from './components/search.vue'
import DisplayWordDefinition from './components/DisplayWordDefinition.vue'
import { useQueryStore } from './store/query'
import { storeToRefs } from 'pinia';
import Header from './components/Header.vue';
import {ref} from 'vue'

  const store = useQueryStore()
  const { query } = storeToRefs(store)

  const font = ref('font-sans')
  console.log(font.value)

  const setFont = (fontVal) => {
    font.value = fontVal
  }

</script>

<template >
  <div class="px-10  min-h-screen dark:bg-zinc-900" :class="font">
    <div class="max-w-2xl mx-auto ">

      <Header :font="font" @set-font="setFont"/>
      
      <Search  />

      <DisplayWordDefinition v-for="word in query.definition" :word="word" />

      <!-- loader -->
      <div v-if="query.loading" class='flex justify-center min-h-screen'>
        <div class="loader mt-10"></div>
      </div>
  
      <!-- error message -->
      <div v-if="query.errMsg" class="flex flex-col items-center text-center gap-3 h-screen mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#9834db" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1m8 .1v-.1"/><path stroke-linejoin="round" d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3"/></g></svg>
        <p class="font-semibold dark:text-zinc-50">{{ query.errMsg.title }}</p>
        <p class="text-zinc-500 dark:text-zinc-400">{{ query.errMsg.message }}</p>
        <p class="text-zinc-500 dark:text-zinc-400">{{ query.errMsg.resolution }}</p>
      </div>
    
    </div>
  </div>
</template>

