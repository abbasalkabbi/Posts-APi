<template>
  <div>
    <header>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/blog/FavoritePost">FavoritePost</NuxtLink></li>
      </ul>
    </header>
    <Nuxt />
  </div>
</template>
<style scoped>
* {
  overflow: hidden;
}
</style>
