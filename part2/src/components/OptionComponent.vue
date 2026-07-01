<script>
export default {
    data() {
        return {
            name: 'Vue.js'
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
    <div>
        <h1>{{ name }}</h1>
        <button @click="showName">Show Name</button>
    </div>
</template>