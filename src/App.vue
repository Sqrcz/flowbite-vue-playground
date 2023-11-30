<template>
  <nav-bar />
  <main class="overflow-hidden rounded-lg bg-white shadow m-5 px-4 py-5 sm:p-6">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>
