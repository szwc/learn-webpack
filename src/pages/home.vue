<script>
export default {
  name: "home",
  data() {
    return {
      greeting: "home",
    };
  },
};
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
}
</style>
