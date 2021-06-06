<template>
  <div class="index">
    <div
      v-for="post in listpost"
      :key="post.id"
      class="post"
      @click="list(post)"
    >
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
  computed: {
    listpost() {
      return this.$store.getters.getlistpost;
    }
  }
};
</script>
