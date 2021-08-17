<template>
  <div>
    <movie-list />
  </div>
</template>

<script>
import MovieList from '~/components/home/MovieList.vue'
export default {
  components: { MovieList },
  data() {
    return {
      latest_movies: [],
    }
  },

  created() {
    // this.getLatestMovies()
  },

  methods: {
    // getLatestMovies() {
    //   this.$axios.get('/list_movies.json').then((res) => {
    //     console.log(res)
    //     this.latest_movies = res.data.data.movies
    //   })
    // },
  },
}
</script>

<style lang="scss" scoped>
</style>