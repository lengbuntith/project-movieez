<template>
  <div>
    <div class="d-flex flex-wrap justify-space-around">
      <base-movie-slide :movies="home_movies" />
    </div>
  </div>
</template>

<script>
import BaseMovieCard from '../BaseMovieCard.vue'
import CardFloat from '../CardFloat.vue'

export default {
  components: {
    BaseMovieCard,
    CardFloat,
  },

  props: {
    home_movies: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
