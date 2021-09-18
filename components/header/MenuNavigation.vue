<template>
  <div class="d-none d-md-flex ml-4">
    <v-btn to="/" text> Home </v-btn>
    <genre-hover :genres="genres" />
  </div>
</template>

<script>
import GenreHover from './GenreHover.vue'
export default {
  components: { GenreHover },

  computed: {
    genres() {
      return this.$store.state.genres
    },
  },

  beforeMount() {
    this.genres == '' ? this.$store.dispatch('getGenres') : ''
  },
}
</script>