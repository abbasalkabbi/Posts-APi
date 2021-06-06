<template>
  <div class="index">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="head">
        <h1>{{ post.title }}</h1>
      </div>

      <section>
        <h4>{{ post.body }}</h4>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  asyncData({ $axios }) {
    return $axios
      .$get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        return {
          posts: res
        };
      });
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>

<style></style>
