<template>
  <v-tooltip v-model="show" right>
    <template v-slot:activator="{ on, attrs }">
      <base-movie-card
        @mouseover.native="show = true"
        @mouseleave.native="show = false"
        :movie="movie"
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <div style="width: 300px">
      {{ movie.name }} <br />
      <base-movie-cart-rating :value="movie.imdb" /> <br />
      {{ genre }} <br />
      <br />
      {{ movie.synopsis.slice(0, 320) }}...
    </div>
  </v-tooltip>
</template>

<script>
import BaseMovieCard from './BaseMovieCard.vue'
export default {
  components: { BaseMovieCard },

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
      var inputString = 'AcvcvDadfsdf'
      var newString = []
      for (var i = 0; i < inputString.length; i++) {
        if (inputString[i].match(/[A-Z]/) != null) {
          newString[i] = i > 0 ? ' ' + inputString[i] : inputString[i] 
        } else {
          newString[i] = inputString[i]
        }
      }

      return newString.toString()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>