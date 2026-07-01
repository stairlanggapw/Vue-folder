<script setup>
const name = 'Vue.js'

const showName = () => {
    console.log(name)
}
</script>

<template>
    <div>
        <h1>{{ name }}</h1>
        <button @click="showName">Show Name</button>
    </div>
</template>