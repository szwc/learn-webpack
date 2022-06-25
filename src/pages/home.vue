<script>
import _ from 'lodash'
import {reactive} from 'vue'
import CommonTitle from '../components/title.vue'
console.log('commontitle',CommonTitle);
export default {
  name: "home",
  setup(props) {
    const data = reactive({
      name:'abc'
    })
    return {
      data
    }
  },
  mounted() {
    
  },
};
</script>

<template>
  <p class="greeting">{{ data.name }}</p>
  <CommonTitle :title="home"></CommonTitle>
  <img src="../image/carrot.jpeg" alt="">
  
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
}
</style>
