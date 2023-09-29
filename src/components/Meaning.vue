<script setup>
  import Synonym from './Synonym.vue'
    const props = defineProps({
        meaning: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div>
        <p class="flex flex-row after:ml-3 font-semibold italic after:flex-auto after:m-auto after:border-b-2 after:border-solid after:text-zinc-900 text-xl mt-8 dark:text-zinc-50">{{ meaning.partOfSpeech }}</p>
        <p class="text-zinc-500 py-3 text-xl dark:text-zinc-400">Meaning</p>
        <p class="py-2 dark:text-zinc-50">{{ meaning.definitions[0].definition }}</p>
    </div>
    <div className="flex my-5">
        <p className=" text-zinc-500 text-lg mr-3 dark:text-zinc-400">Synonyms:</p>
        <div className="flex flex-wrap gap-4 mb-8 w-max" >
            <Synonym v-for="synonym of meaning.synonyms" :synonym="synonym"/>
        </div>
    </div>
</template>

