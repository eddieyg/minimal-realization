<template>
  <section class="bit-operation">
    <h3>位运算</h3>

    <div class="sec-row">
      <div>
        <strong>n &lt;&lt; m: </strong>
        <span>{{ leftTime }}ms</span>
      </div>
      <div>
        <strong>n*2^m: </strong>
        <span>{{ leftNormalTime }}ms</span>
      </div>
      <div>
        <button @click="leftTest()">
          test
        </button>
      </div>
    </div>

    <div class="sec-row">
      <div>
        <strong>位异或交换两数: </strong>
        <span>{{ swapTime }}ms</span>
      </div>
      <div>
        <strong>普通交换两数: </strong>
        <span>{{ swapNormalTime }}ms</span>
      </div>
      <div>
        <button @click="swapTest()">
          test
        </button>
      </div>
    </div>

    <div class="sec-row">
      <div>
        <strong>位运算奇偶判断: </strong>
        <span>{{ ovTime }}ms</span>
      </div>
      <div>
        <strong>普通奇偶判断: </strong>
        <span>{{ ovNormalTime }}ms</span>
      </div>
      <div>
        <button @click="ovTest()">
          test
        </button>
      </div>
    </div>

    <div class="sec-row">
      <div>
        <strong>位运算 ~~: </strong>
        <span>{{ nonTime }}ms</span>
      </div>
      <div>
        <strong>普通 parseInt: </strong>
        <span>{{ nonNormalTime }}ms</span>
      </div>
      <div>
        <button @click="nonTest()">
          test
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/** n * 2 */
const leftTime = ref(0)
const leftNormalTime = ref(0)

function leftTest() {
  const times = 100000000
  const lt = +new Date()
  let ltIndex = times
  let ltNum = 0
  console.time('leftTest')
  while (ltIndex) {
    ltNum += ltIndex << 5
    ltIndex--
  }
  console.timeEnd('leftTest')
  leftTime.value = +new Date() - lt

  const lnt = +new Date()
  let lntIndex = times
  let lntNum = 0
  console.time('leftTest2')
  while (lntIndex) {
    lntNum += lntIndex * (2 ** 5)
    lntIndex--
  }
  console.timeEnd('leftTest2')
  leftNormalTime.value = +new Date() - lnt
}

/** swap */
const swapTime = ref(0)
const swapNormalTime = ref(0)

function swapTest() {
  const times = 1000000000
  const st = +new Date()
  let stIndex = times
  while (stIndex--) {
    let a = 1
    let b = 2
    a ^= b
    b ^= a
    a ^= b
  }
  swapNormalTime.value = +new Date() - st

  const snt = +new Date()
  let sntIndex = times
  while (sntIndex--) {
    let a = 1
    let b = 2
    a = a + b
    b = a - b
    a = a - b
  }
  swapTime.value = +new Date() - snt
}

/** odd-even */
const ovTime = ref(0)
const ovNormalTime = ref(0)

function ovTest() {
  const times = 1000000000

  let ovtEven = 0
  const ovt = +new Date()
  let ovtIndex = times
  console.time('ovTest')
  while (ovtIndex--) {
    if ((ovtIndex & 1) === 0)
      ovtEven++
  }
  ovTime.value = +new Date() - ovt
  console.timeEnd('ovTest')

  let ovntEven = 0
  const ovnt = +new Date()
  let ovntIndex = times
  console.time('ovTest1')
  while (ovntIndex--) {
    if ((ovtIndex % 1) === 0)
      ovntEven++
  }
  ovNormalTime.value = +new Date() - ovnt
  console.timeEnd('ovTest1')
}

/** ~ */
const nonTime = ref(0)
const nonNormalTime = ref(0)

function nonTest() {
  const times = 1000000000

  let nonVal = 0
  const nont = +new Date()
  let nontIndex = times
  console.time('nonTest')
  while (nontIndex--)
    nonVal = ~~'10.88'

  nonTime.value = +new Date() - nont
  console.timeEnd('nonTest')

  let nonnVal = 0
  const nonnt = +new Date()
  let nonntIndex = times
  console.time('nonTest1')
  while (nonntIndex--)
    nonnVal = parseInt('10.88')

  nonNormalTime.value = +new Date() - nonnt
  console.timeEnd('nonTest1')
}
</script>

<style lang="scss" scoped>
.bit-operation {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: $border-radius-m;
  .sec-row{
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    >div{
      margin: 0 20px;
    }
  }
}
</style>
