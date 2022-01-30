<script>
import _ from 'lodash'
export default {
  name: "home",
  data() {
    return {
      greeting: "home",
    };
  },
  mounted() {
    console.log('home vue lodash',_);
  },
};
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
  <img src="../image/carrot.jpeg" alt="">
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
}
</style>
