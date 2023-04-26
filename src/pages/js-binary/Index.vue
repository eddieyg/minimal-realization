<template>
  <div class="js-binary">
    <h2>js binary</h2>
    <BitOperation />
    <Conversion />
    <Code />
  </div>
</template>

<script setup lang="ts">
import BitOperation from './BitOperation.vue'
import Code from './Code.vue'
import Conversion from './Conversion.vue'
</script>

<style lang="scss" scoped>
.js-binary {
  >div{
    margin-top: 50px;
  }
}
</style>
