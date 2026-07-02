<script>
export default {
    data() {
        return {
            name: 'Options API'
        }
    },
    methods: {
        showName() {
            console.log(this.name)
        }
    }
}
</script>

<template>
  <h1>Hello {{ name }}</h1>
  <button @click="showName">Show Name</button>
</template>