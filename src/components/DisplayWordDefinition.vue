<script setup>
import Meaning from './Meaning.vue';

  const props = defineProps({
      word: {
          type: Object,
          required: true
      }
  })

  const phonetic = props?.word?.phonetics[0]?.audio
  const audio = new Audio(phonetic)

</script>

<template>
 
 <div class='flex items-center mb-10 '>
    <div >
     <h2 class="font-bold text-5xl  my-5 dark:text-zinc-50">{{ word.word }}</h2>
    <p class="text-purple-500 text-xl '">{{ word.phonetic }}</p> 
    </div>

    <button type="button" class='ml-auto hover:bg-purple-300 rounded-full'>
      <img src="../assets/icon-play.svg" alt="" @click="audio.play()"/>
    </button>
  </div>

  <Meaning v-for="meaning of word.meanings" :meaning="meaning"/>
    
  <hr/>
  <div className='flex gap-3 pt-5 pb-10 items-end flex-wrap '> 
    <p className='text-zinc-500 text-sm dark:text-zinc-400'>Source: </p>
    <a :href="word.sourceUrls[0]" target="_blank" class='flex gap-3 dark:text-zinc-50'>{{ word.sourceUrls[0] }}
      <img src="../assets/icon-new-window.svg" alt="new window icon" />
    </a>
  </div>
    
</template>




