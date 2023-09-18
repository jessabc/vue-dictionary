<script setup>
    const props = defineProps({
        synonym: {
            type: String,
            required: true
        }
    })
</script>

<template >
    <p>{{ props.synonym }}</p>
</template>


