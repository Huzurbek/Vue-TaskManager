<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Tasks</router-link>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link
              to="/"
              exact
              active-class="active"
          >
            Create
          </router-link>
        </li>
        <li>
          <router-link
              to="/list"
              active-class="active"
          >
            List
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
.active{
  background: #4c7fd2;
}
</style>