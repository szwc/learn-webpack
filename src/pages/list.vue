<script>
  import _ from 'lodash'
export default {
  name: "listPage",
  data() {
    return {
      greeting: "home",
      list: [
        { name: "张三", id: "zhangsan" },
        { name: "李四", id: "lisi" },
      ],
    };
  },
  mounted() {
    console.log('list vue lodash',_);
  },
};
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
  <div>
    <img src="../image/1.jpeg" alt="">
  </div>
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
}
</style>
