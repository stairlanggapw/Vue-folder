<script setup>
const name = 'Composition API'
const showName = () => {
    console.log(name)
}

</script>

<template>
  <h1>Hello {{ name }}</h1>
  <button @click="showName">Show Name</button>
</template>