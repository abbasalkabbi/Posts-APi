export default {
  state: {
    posts: [],
    ListPost: []
  },
  mutations: {
    updatePosts(state, data) {
      state.posts = data;
    },
    ListPost(state, data) {
      state.ListPost.push(data);
    }
  },
  actions: {},
  modules: {},
  getters: {
    getposts: state => state.posts,
    getlistpost: state => state.ListPost
  }
};
