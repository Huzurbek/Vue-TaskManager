<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    "Navbar": require("@/components/Navbar.vue").default,
  }
}
</script>
<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
