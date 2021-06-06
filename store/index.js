export default {
  state: {
    posts: [],
    ListPost: [],
    post: {}
  },
  mutations: {
    updatePosts(state, data) {
      state.posts = data;
    },
    ListPost(state, data) {
      state.ListPost.push(data);
    },
    selectPost(state, data) {
      state.post = data;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getposts: state => state.posts,
    getlistpost: state => state.ListPost,
    getpost: state => state.post
  }
};
