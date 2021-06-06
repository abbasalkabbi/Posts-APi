<template>
  <div class="index">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="head">
        <h1>
          <Nuxt-link :to="`/blog/${post.id}`">
            <span @click="postpage(post)">
              {{ post.title }}
            </span>
          </Nuxt-link>
        </h1>
        <img
          src="@/assets/image/favorite-icon.png"
          alt=""
          @click="list(post)"
          :id="'id' + post.id"
        />
        <img
          src="@/assets/image/icons8-ok-52.png"
          class="ok"
          :id="'ok' + post.id"
        />
      </div>

      <section>
        <h4>{{ post.body }}</h4>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    list(post) {
      this.$store.commit("ListPost", post);
      document.querySelector(`#id${post.id}`).style.display = "none";
      document.querySelector(`#ok${post.id}`).style.display = "block";
    },
    postpage(post) {
      this.$store.commit("selectPost", post);
    }
  },
  fetch({ $axios, store }) {
    return $axios
      .$get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        store.commit("updatePosts", res);
      });
  },
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.getters.getposts;
    },
    listpost() {
      return this.$store.getters.getlistpost;
    }
  }
};
</script>

<style></style>
