<template>
  <div class="code">
    <p>
      <input v-model="value" type="text">
      <input v-model="bits" type="text">位
      <button @click="getCodes">
        转换
      </button>
    </p>
    <p style="font-size: 24px;">
      原码：<strong>{{ result.original }}</strong>
    </p>
    <p style="font-size: 24px;">
      反码：<strong>{{ result.inverse }}</strong>
    </p>
    <p style="font-size: 24px;">
      补码：<strong>{{ result.complementary }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const value = ref('')
const bits = ref(8)

interface Codes {
  original: string
  inverse: string
  complementary: string
}
const codes = ref<Codes>({
  original: '',
  inverse: '',
  complementary: '',
})
const result = computed(() => {
  const data: Codes = {} as any
  for (const k in codes.value)
    data[k] = codes.value[k].replace(/(.{4})/g, '$1 ')
  return data
})

function getCodes() {
  codes.value.original = getOriginalCode(value.value, bits.value)
  codes.value.inverse = getInverseCode(value.value, bits.value)
  codes.value.complementary = getComplementaryCode(value.value, bits.value)
}

// 原码计算
function getOriginalCode(decimal: number | string, bits = 8) {
  decimal = Number(decimal)
  const signBit = decimal < 0 ? '1' : '0'
  const valBits = bits - 1
  let binary = Math.abs(decimal).toString(2)
  if (binary.length < valBits)
    binary = binary.padStart(valBits, '0')
  else if (binary.length > valBits)
    binary = binary.slice(-(valBits))
  return signBit + binary
}

// 反码计算
function getInverseCode(decimal: number | string, bits = 8) {
  const original = getOriginalCode(decimal, bits)
  if (Number(decimal) >= 0)
    return original
  const inverse = original.replace(
    /0|1/g,
    (val, index) => {
      if (index !== 0)
        return val === '0' ? '1' : '0'
      else
        return val
    },
  )
  return inverse
}

// 补码计算
function getComplementaryCode(decimal: number | string, bits = 8) {
  const inverse = getInverseCode(decimal, bits)
  if (Number(decimal) >= 0)
    return inverse
  const valBits = bits - 1
  let val = binaryAddition(inverse.slice(1), 1)
  if (val.length < valBits)
    val = val.padStart(valBits, '0')
  else if (val.length > valBits)
    val = val.slice(-(valBits))
  return inverse.slice(0, 1) + val
}

// 二进制相加
function binaryAddition(a, b) {
  const strA = a.toString()
  const strB = b.toString()
  let result = ''
  let carry = 0
  let i = strA.length - 1
  let j = strB.length - 1
  while (i >= 0 || j >= 0) {
    const sum = (+strA[i] || 0) + (+strB[j] || 0) + carry
    result = (sum % 2) + result
    carry = Math.floor(sum / 2)
    i--
    j--
  }
  if (carry)
    result = `1${result}`

  return result
}
</script>

<style lang="scss" scoped>
.code{
  padding: 20px;
  border: 1px solid #eee;
  border-radius: $border-radius-m;
  p>button{
    margin: 0px 10px;
  }
}
</style>
