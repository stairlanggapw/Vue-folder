<script setup>
import MainButton from './components/MainButton.vue'
const greeting = 'Hello, Vue 3!'
const blogPost = '<p style="color:red;">This is a blog post about Vue 3.</p>'
const idBlog = 'blog1'
</script>

<template>
  <p>{{ greeting }}</p>

  <div v-bind:id="idblog">
    {{ blogPost }}
  </div>
  <div v-html="blogPost"></div>

  <MainButton />
</template>

