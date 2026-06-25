<template>
  <Header/>
  <div class="container">
    <MainContent />
    <Aside />
  </div>
</template>

<script setup>
  import Header from './components/Header.vue'
  import MainContent from './components/MainContent.vue'
  import Aside from './components/Aside.vue'
</script>

<style scoped>
:global(body) {
    background-color: #333;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  margin-top: 20px;
}
</style>
