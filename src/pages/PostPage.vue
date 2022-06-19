<template>
  <div>
    <h1>{{ $store.state.likes }}</h1>
    <div>
      <my-button @click="$store.commit('incrementLikes')">Like</my-button>
      <my-button @click="$store.commit('decrementLikes')">DisLike</my-button>
    </div>
    <h1>Posts Page</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Create post
      </my-button>
      <my-select
          v-model="selectedSort"
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
// import axios from "axios"

export default {
  components: {PostForm, PostList},
  data() {
    return {

    }
  },
  methods: {
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
    // changePage(page) {
    //   this.currentPage = page
    // },

  },
  mounted() {
    this.fetchPosts()

  },
  computed: {

  },
  watch: {
    // currentPage() {
    //   this.fetchPosts()
    // }
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