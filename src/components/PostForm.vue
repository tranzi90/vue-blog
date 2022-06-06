<template>
  <form @submit.prevent>
    <h4>Create post</h4>
    <input
        v-model="post.title"
        type="text"
        placeholder="Title"
    >
    <input
        type="text"
        placeholder="Description"
        v-model="post.body"
    >
    <button @click="createPost">Post</button>
  </form>
</template>

<script>
export default {
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
      // const newPost = {
      //   id: Date.now(),
      //   title: this.title,
      //   body: this.body
      // }
      // this.posts.push(newPost)
      // this.title = ''
      // this.body = ''
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
button {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>