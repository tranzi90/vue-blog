<template>
  <div>
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
import {usePosts} from "@/hooks/usePosts"
import {useSortedPosts} from "@/hooks/useSortedPosts"
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts"
// import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
  components: {PostForm, PostList},
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'By name'},
        {value: 'body', name: 'By content'},
      ]
    }
  },
  setup() {
    const {posts, isPostsLoading, totalPages} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  },
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