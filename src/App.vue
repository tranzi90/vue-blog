<template>
  <div>
    <div class="post">
      <div><strong>Title:</strong> Post about JavaScript</div>
      <div><strong>Description:</strong> JavaScript is universal programming language</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    addLike() {
      ++this.likes
    },
    addDislike() {
      ++this.dislikes
    }
  }
}
</script>

<style>

</style>