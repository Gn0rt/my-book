<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="nav-brand">
      <router-link to="/">MyWebsite</router-link>
    </div>
    <ul class="nav-menu">
      <li><router-link to="/" active-class="active" exact>Home</router-link></li>
      <li><router-link to="/about" active-class="active">About</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
}

.nav-menu a.active {
  font-weight: bold;
  color: #42b983;
}
</style>