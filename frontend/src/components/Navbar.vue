<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar flex justify-between items-center p-4 bg-transparent">
    <div class="nav-brand">
      <router-link to="/" class="relative ml-5 ">
        MY<span>BOOK</span>
        <span class="absolute top-0 w-[1px] h-5 mx-2 bg-red-600"></span>
      </router-link>
      <router-link to="/" class="ml-4"><font-awesome-icon :icon="['fa', 'cart-shopping']" /></router-link>

    </div>
    <ul class="nav-menu flex gap-8 list-none mr-5">
      <li><router-link to="/" active-class="active" exact>Explorer</router-link></li>
      <li><router-link to="/about" active-class="active">Shop</router-link></li>
      <li><router-link to="/about" active-class="active">Blog</router-link></li>
      <li><router-link to="/contact" active-class="active">Log in</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-menu a {
  text-decoration: none;
}

.nav-menu a.active {
  font-weight: bold;
  color: #42b983;
}
</style>