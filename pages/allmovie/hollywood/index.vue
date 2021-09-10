<template>
    <v-row class="d-flex flex-wrap justify-space-around">
      <v-col v-for="(movie, index) in movies" :key="index">
        <base-movie-card :movie="movie" />
      </v-col>
    </v-row>
</template>

<script>
import BaseMovieCard from '~/components/BaseMovieCard.vue'
export default {
  components: { 
    BaseMovieCard 
  },

  data() {
    return {
      movies: []
    }
  },

  async mounted() {
    const res = await this.$supabase.from('movies').select('*')
      console.log('get movie',res)

      this.movies = res.data
  }
}
</script>

<style>
 
</style>