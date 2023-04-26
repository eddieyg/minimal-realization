<template>
  <div class="conversion">
    <p>
      <input v-model="value" type="text">
      结果：<strong style="font-size: 24px;">{{ result }}</strong>
    </p>
    <p>
      <button @click="() => result = toDecimal(value, 2)">
        二进制转十进制
      </button>
      <button @click="() => result = toDecimal(value, 8)">
        八进制转十进制
      </button>
      <button @click="() => result = toDecimal(value, 16)">
        十六进制转十进制
      </button>
    </p>
    <p>
      <button @click="() => result = toOtherRadix(value, 2)">
        十进制转二进制
      </button>
      <button @click="() => result = toOtherRadix(value, 8)">
        十进制转八进制
      </button>
      <button @click="() => result = toOtherRadix(value, 16)">
        十进制转十六进制
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const result = ref('')

function toDecimal(value: string, radix: 2 | 8 | 16) {
  return parseInt(value, radix).toString()
}
function toOtherRadix(value: string | number, radix: 2 | 8 | 16) {
  return Number(value).toString(radix)
}
</script>

<style lang="scss" scoped>
.conversion{
  padding: 20px;
  border: 1px solid #eee;
  border-radius: $border-radius-m;
  p>button{
    margin: 0px 10px;
  }
}
</style>
