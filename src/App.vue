<script setup>
import './style.css'
import { ref } from 'vue';
import Search from './components/Search.vue'
import DisplayWordDefinition from './components/DisplayWordDefinition.vue'

const wordDefinition = ref([])
const errMsg = ref(null)
const loading = ref(false)

const setWordDefinition = (data = null) => {
  if(!data) {
    wordDefinition.value = []
    return
  }
  wordDefinition.value = []
  wordDefinition.value = [data] 
}

const setErrorMsg = (errData = null) => {
  if(!errData) {
    errMsg.value = null
    return
  }
  errMsg.value = errData
}

const setLoading = () => {
  loading.value = !loading.value
}
</script>

<template>
  <div class="px-10 max-w-2xl mx-auto  min-h-screen">
    <Search @word-definition="setWordDefinition" @error-msg="setErrorMsg" @loading="setLoading"/>

    <DisplayWordDefinition v-for="word in wordDefinition" :word="word" />

    <!-- loader -->
    <div v-if="loading" class='flex justify-center min-h-screen'>
      <div class="loader mt-10"></div>
    </div>
 
    <!-- error message -->
    <div v-if="errMsg" class="flex flex-col items-center text-center gap-3 h-screen mt-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#9834db" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1m8 .1v-.1"/><path stroke-linejoin="round" d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3"/></g></svg>
      <p class="font-semibold ">{{ errMsg.title }}</p>
      <p class="text-zinc-500">{{ errMsg.message }}</p>
      <p class="text-zinc-500">{{ errMsg.resolution }}</p>
    </div>
  </div>
</template>

