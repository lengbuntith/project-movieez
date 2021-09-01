<template>
  <div>
    <movie-list :home_movies="home_movies" />
    
  </div>
</template>

<script>
import MovieList from '~/components/home/MovieList.vue';
import { mapMutations, mapState } from 'vuex'

export default {
  components: { MovieList },

   computed: {
    ...mapState(['home_movies']),
  },


  beforeMount() {
    console.log('before mount')
    this.getMovie()
  },

  methods: {
    ...mapMutations(['HOME_MOVIES']),

    async getMovie() {
      const res = await this.$supabase.from('movies').select('*')
      console.log('get movie', res)
      this.HOME_MOVIES(res.data)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>