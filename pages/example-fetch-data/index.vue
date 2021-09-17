<template>
  <div>
    <h2>Fetch data</h2>

    {{movies}}

  <!-- <v-row>
      <v-col v-for="(movie, index) in movies" :key="index">
        <base-movie-card :movie="movie" />
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import BaseMovieCard from '~/components/BaseMovieCard.vue'
export default {
  components: {
    BaseMovieCard,
  },

  data() {
    return {
    //   movies: [
        // {
        //   genres: 'Adventure',
        //   id: 1,
        //   imdb: 7.3,
        //   name: 'Black Panther',
        //   synopsis: "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war. —Editor",
        //   thumbnail: 'https://img.yts.mx/assets/images/movies/black_panther_2018/medium-cover.jpg',
        //   trailer: null,
        //   video: null,
        // },

    //     {
          // genres: 'Adventure',
          // id: 2,
          // imdb: 7.3,
          // name: 'Black Panther',
          // synopsis: "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war. —Editor",
          // thumbnail: 'https://img.yts.mx/assets/images/movies/black_panther_2018/medium-cover.jpg',
          // trailer: null,
          // video: null,
    //     },
    //   ],

      movies: []
    }
  },

  async mounted () {
      const res = await this.$supabase.from('movies').select('id,name,imdb').eq('id', '5')
      console.log('get movie',res)

      this.movies = res.data
  },
}
</script>

<style lang="scss" scoped>
</style>


backend table

  column:
    - id
    - name
    - imdb ( rating )
    - video
    - thumbnail
    - synopis
    - genres
    - trailer


let res = await supabase
  .from('movies')
  .select("*")

  // Filters
  .eq('column', 'Equal to')
  .gt('column', 'Greater than')
  .lt('column', 'Less than')
  .gte('column', 'Greater than or equal to')
  .lte('column', 'Less than or equal to')
  .like('column', '%CaseSensitive%')
  .ilike('column', '%CaseInsensitive%')
  .is('column', null)
  .in('column', ['Array', 'Values'])
  .neq('column', 'Not equal to')

  // Arrays
  .cs('array_column', ['array', 'contains'])
  .cd('array_column', ['contained', 'by'])



