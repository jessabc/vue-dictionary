<script setup>
    const props = defineProps({
        meaning: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div>
        <p class="flex flex-row after:ml-3 font-semibold italic after:flex-auto after:m-auto after:border-b-2 after:border-solid after:text-zinc-900 text-xl mt-8">{{ props.meaning.partOfSpeech }}</p>
        <p class="text-zinc-500 py-3 text-xl ">Meaning</p>
        <p class=" py-2 ">{{ props.meaning.definitions[0].definition }}</p>
    </div>
</template>



