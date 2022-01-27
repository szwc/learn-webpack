<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
    };
  },
};
</script>

<template>
  <div>
    <router-link to="/home">home</router-link>
    <br>
    <router-link to="/list">list</router-link><br>
    <router-link to="/todolist">todolist</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
