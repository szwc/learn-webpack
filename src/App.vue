<script>
export default {
  data() {
    return {
      greeting: "Hello World!",
      menuList:[
        {name:'home',path:'/home'},
        {name:'list',path:'/list'},
        {name:'todolist',path:'/todolist'},
        {name:'setup',path:'/setup'},
      ]
    };
  },
};
</script>

<template>
  <div>
    <!-- <router-link to="/home">home</router-link>
    <router-link to="/list">list</router-link><br>
    <router-link to="/todolist">todolist</router-link> -->
    <ul>
      <li v-for="item in menuList" :key="item.name">
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
ul {
  overflow: hidden;
}
ul li {
  /* display: inline-block; */
  float: left;
  list-style: none;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
