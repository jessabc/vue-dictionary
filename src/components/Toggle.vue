
<script setup>
import {ref, watch} from 'vue'
const theme = ref('light')

watch(theme, () => {
    if(theme.value === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
})

const handleThemeSwitch = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    console.log(theme.value)
    }

</script>

<template>
    <div className="relative flex flex-col items-center justify-center bg-green-600">
            <div className="flex">
                <label className="inline-flex relative items-center  cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={enabled}
                    readOnly
                  />

                  <div
                  @click="handleThemeSwitch"
                    className="w-11 h-6 bg-purple-500 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"
                  ></div>

                  <img v-if="theme === 'light'"
                  src="../assets/icon-moon.svg"
                  className="h-6 w-6 text-zinc-500 ml-2 dark:text-purple-500" @click="handleThemeSwitch"/> 
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none" stroke="#838383" stroke-width="1"><circle cx="12" cy="12" r="4" stroke-linejoin="round"/><path stroke-linecap="round" d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"/></g></svg>
                </label>
            </div>
        </div>
</template>


