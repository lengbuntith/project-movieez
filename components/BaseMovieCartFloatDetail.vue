<template>
  <v-tooltip  right nudge-left="10px">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <base-movie-card
          :movie="movie"
        />
      </div>
    </template>
    <div style="width: 300px">
      {{ movie.name }} <br />
      <base-movie-cart-rating :value="movie.imdb" /> <br />
      {{ genre }} <br />
      <br />
      {{ movie.synopsis.slice(0, 320) }}...
    </div>

    <watch-trailer />
  </v-tooltip>
</template>

<script>
import BaseMovieCard from './BaseMovieCard.vue'
import WatchTrailer from './WatchTrailer.vue'
export default {
  components: { BaseMovieCard, WatchTrailer },

  props: {
    movie: {
      type: Object,
      default: {},
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    genre() {
      var s = this.movie.genres
      s = s.replace(/([A-Z])/g, ' $1').trim()

      return s
    },
  },

  methods: {
    hideFloat() {
      setTimeout(() => {
        this.show = false
      }, 3000)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>