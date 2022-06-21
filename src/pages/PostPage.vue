<template>
  <div>
    <h1>{{ $store.state.likes }}</h1>
    <div>
      <my-button @click="$store.commit('incrementLikes')">Like</my-button>
      <my-button @click="$store.commit('decrementLikes')">DisLike</my-button>
    </div>
    <h1>Posts Page</h1>
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Create post
      </my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Loading posts...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <my-pages-->
    <!--        :totalPages="totalPages"-->
    <!--        :currentPage="currentPage"-->
    <!--        @changePage="changePage"-->
    <!--    />-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
  components: {PostForm, PostList},
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPosts: 'post/setPosts',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      currentPage: state => state.post.currentPage,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
  },
  watch: {

  }
}
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 30px;
  background: green;
}
</style>