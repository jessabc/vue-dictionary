<script setup>
import { useQueryStore } from '../store/query'
import { storeToRefs } from 'pinia';

    const props = defineProps({
        synonym: {
            type: String,
            required: true
        }
    })

    const store = useQueryStore()
    const { query } = storeToRefs(store)
    const {getWordDefinition} = store    

    const handleClick = () => {
        query.text = props.synonym
        getWordDefinition(query.text)
        window.scrollTo(0,0)
    }
</script>

<template >
    <p class="cursor-pointer text-purple-600 text-lg font-semibold hover:text-purple-500" @click="handleClick(synonym)">{{ synonym }}</p>
</template>

