<script>
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
};
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
}
</style>
