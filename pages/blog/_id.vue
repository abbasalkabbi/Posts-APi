<template>
  <div class="postpage">
    <div class="postcontent">
      <div class="head">
        <h1>{{ post.title }}</h1>
      </div>
      <section>
        {{ post.body }}
      </section>
    </div>
  </div>
</template>
<script>
export default {
  fetch({ $axios, store, params }) {
    if (store.state.post && store.state.post.id == params.id) return true;
    return $axios
      .$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => {
        store.commit("selectPost", res);
      });
  },

  computed: {
    post() {
      return this.$store.getters.getpost;
    }
  }
};
</script>
<style scoped></style>
