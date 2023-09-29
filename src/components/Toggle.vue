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
    <div className="relative flex flex-col items-center justify-center ">
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
                  <img v-else
                  src="../assets/icon-sun.svg"
                  className="h-6 w-6 text-zinc-500 ml-2 dark:text-purple-500" @click="handleThemeSwitch"/>
                </label>
            </div>
        </div>
</template>


