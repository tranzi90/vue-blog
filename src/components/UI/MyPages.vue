<template>
  <div class="page__wrapper">
    <div
        v-for="page in totalPages"
        :key="page"
        class="page"
        :class="{
          'current-page': page === currentPage
        }"
        @click="$emit('changePage', page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPages",
  props: {
    totalPages: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  }
}
</script>

<style scoped>
  .page__wrapper {
    display: flex;
    margin-top: 15px;
  }
  .page {
    border: 1px solid black;
    padding: 10px;
  }
  .current-page {
    border: 2px solid teal;
  }
</style>