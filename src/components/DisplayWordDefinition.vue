<script setup>
import Meaning from './Meaning.vue';

  const props = defineProps({
      word: {
          type: Object,
          required: true
      }
  })

</script>

<template>
 
      <h2 class="font-bold text-5xl  my-5">{{props.word.word}}</h2>
      <p class="text-purple-500 text-xl '">{{props.word.phonetic}}</p>
    
    <Meaning v-for="meaning of props.word.meanings" :meaning="meaning"/>

    <hr/>
    <div className='flex gap-3 pt-5 pb-10 items-end flex-wrap '> 
          <p className='text-zinc-500 text-sm'>Source: </p>
          <a :href="props.word.sourceUrls[0]" target="_blank" class='flex gap-3 '>{{ props.word.sourceUrls[0] }}
            <img src="../assets/icon-new-window.svg" alt="new window icon" />
          </a>
        </div>
    
</template>




