import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from 'axios'

export const useQueryStore = defineStore('query', () => {
    const query = reactive({
        text: '',
        loading: false,
        errMsg: null,
        definition: null
    })

    const getWordDefinition = async (wordVal) => {
        query.definition = null
        query.errMsg = null
        query.loading = true

        try{
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query.text ? query.text : wordVal}`)
            query.definition = [response.data[0]]
        }catch(err) {
            query.errMsg = err.response.data
        }finally{
            query.text = ''
            query.loading = false
        }
    }
   
    return { query, getWordDefinition }
})

