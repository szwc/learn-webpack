<template>
    <div>
        <button @click="increment">点击了：{{ state.count }} 次</button>
        <p></p>
    </div>
</template>

<script setup>
    // <script setup> 
import { ref,reactive , onMounted,nextTick } from 'vue'

// 响应式状态
const count = ref(3)
const state = reactive({count:3})

// 更改状态、触发更新的函数
function increment() {
//   count.value++
  state.count++
  nextTick(() => {
    // 访问更新后的 DOM
    console.log('数据跟新完了');
  })
}

// 生命周期钩子
onMounted(() => {
  console.log(`计数器初始值为 ${count.value}。`)
})
</script>