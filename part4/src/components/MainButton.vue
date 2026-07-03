<script setup>
import { ref, computed } from 'vue'

const isLoading = ref(false)

const buttonAttr = computed(() => ({
    disabled: isLoading.value,
    class: 'text-3xl bg-black text-white p-2 rounded-lg hover:bg-gray-800',
}))

const handleClick = () => {
    isLoading.value = !isLoading.value
}

const renderIsLoading = () => {
    return isLoading.value ? 'Loading' : 'Submit'
}
</script>

<template>
    <button v-bind="buttonAttr" @click="handleClick">
        {{ renderIsLoading() }}
    </button>
</template>