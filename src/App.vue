<template>
  <div class="app">
    <form>
      <h4>Create post</h4>
      <input
          type="text"
          placeholder="Title"
          v-bind:value="title"
          @input="title = $event.target.value"
      >
      <input
          type="text"
          placeholder="Description"
          v-bind:value="body"
          @input="body = $event.target.value"
      >
      <button @click="createPost">Post</button>
    </form>
    <div class="post" v-for="post in posts" v-bind:key="post.id">
        <div><strong>Title:</strong> {{ post.title }} </div>
        <div><strong>Description:</strong> {{ post.body }} </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript', body: 'Post description'},
        {id: 2, title: 'JavaScript 2', body: 'Post description 2'},
        {id: 3, title: 'JavaScript 3', body: 'Post description 3'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
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