<template>
  <div>
    <div>
      <router-link to="/allmovie/hollywood" class="nav-link">
        <button class="movie-type">
          <strong>TOP HOLLYWOOD</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <base-movie-slide  :movies="home_movies"/>
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

<style lang="scss" scoped>
  .nav-link {
    text-decoration-line: none;
  }
  .nav-link :hover {
    color: black;
    background-color: rgb(172, 171, 170);
  }
  .movie-type {
    padding: 0px 10px 0px 10px;
  }
</style>
