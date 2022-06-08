<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <my-input
        v-model="post.title"
        type="text"
        placeholder="Title"
    />
    <my-input
        type="text"
        placeholder="Description"
        v-model="post.body"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px;"
        @click="createPost"
    >
      Post
    </my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton"
import MyInput from "@/components/UI/MyInput";

export default {
  components: {MyInput, MyButton},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>