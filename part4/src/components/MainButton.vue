<script setup>
const buttonDisabled = false
const isLoading = true
const buttonAttr = {
    disabled: isLoading,
    class: 'text-3xl bg-black text-white p-2 rounded-lg hover:bg-gray-800',
}
</script>

<template>
    <button v-bind="buttonAttr">{{ isLoading ? 'Loading' : 'Submit' }}</button>
</template>