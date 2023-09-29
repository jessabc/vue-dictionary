<script setup>
import Toggle from './Toggle.vue';
import {ref} from 'vue'

const props = defineProps({
      font: {
          type: String,
          required: true
      }
  })

  const emit = defineEmits(['set-font'])

const isVisible = ref(false)
console.log(isVisible.value)

const toggleMenu = () => {
    isVisible.value = !isVisible.value
}
console.log(props.font)

const displayFont = () => {
    switch(props.font) {
  case 'font-mono':
    return 'Mono'
   
  case 'font-serif':
    return 'Serif' 
  
case 'font-sans':
    return 'Sans Serif' 
 
}

   
}

const handleClick = (e) => {
console.log(e.target.dataset.font)
emit('set-font', e.target.dataset.font)
isVisible.value = false
}

</script>

<template>
    <div class=" dark:bg-zinc-900 flex justify-between pt-5">

        <!-- <img src="../assets/logo.svg" alt=""> -->

        <div className=' flex ml-auto'>
                <div className='mr-5 relative cursor-pointer dark:text-zinc-50'>

                    <!-- dropdown header  -->
                    <div 
                        class='flex border-r border-solid border-zinc-300' @click="toggleMenu">
                        <p class="pr-2 font-semibold text-xl">{{displayFont()}}</p>
                        <img 
                        
                        src="../assets//icon-arrow-down.svg" alt="" class='mr-4'/>
                    </div>

                     <!-- dropdown modal -->
                    <div :class="isVisible ? 'flex flex-col gap-3 absolute px-10 py-5 right-5 w-max  font-semibold text-xl rounded-lg bg-zinc-50 shadow-2xl z-10 dark:bg-zinc-900 dark:shadow-purple-500': 'hidden'" >
                        <p @click="handleClick($event)" data-font="font-sans">Sans Serif</p>
                        <p @click="handleClick($event)" data-font="font-serif">Serif</p>
                        <p @click="handleClick($event)" data-font="font-mono">Mono</p>
                    </div>
                </div>
            </div>
           <Toggle/>
    </div>
 
</template>



