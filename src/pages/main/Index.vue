<template>
  <main class="index-page">
    <h2>Realization List</h2>
    <ul>
      <li v-for="nav in navList" :key="nav.name">
        <router-link :to="{ name: nav.name }">
          {{ nav.name }}
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import routes from '@/router/routes'

const navList = routes[0].children.filter(r => r.meta?.homeList)
</script>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
