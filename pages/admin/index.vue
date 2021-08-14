<template>
  <v-container class="mt-5">

    <div class=" d-flex justify-end mb-6">
        <post-movie />
    </div>

    <v-data-table
      :headers="headers"
      :items="movies"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.thumbnail="{ item }">
        <v-img class="ma-2" max-width="100" :src="item.thumbnail"></v-img>
      </template>
    </v-data-table>

  </v-container>
</template>

<script>
import PostMovie from '~/components/admin/PostMovie.vue'
export default {
  components: { PostMovie },
  data() {
    return {
      movies: [],
      movieSearched: [],
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Thumbnail', value: 'thumbnail' },
        { text: 'Name', value: 'name' },
        { text: 'Rating', value: 'imdb' },
        { text: 'Video', value: 'video' },
      ],
    }
  },

  mounted() {
    this.getMovies()
  },

  methods: {
    async getMovies() {
      const res = await this.$supabase.from('movies').select('*')
      console.log('get movie', res)
      this.movies = res.data
    },
  },
}
</script>

<style lang="scss" scoped>
</style>




//movie search
                background_image: "https://yts.mx/assets/images/movies/romeo_santos_king_of_bachata_2021/background.jpg"
                background_image_original: "https://yts.mx/assets/images/movies/romeo_santos_king_of_bachata_2021/background.jpg"
                date_uploaded: "2021-08-06 23:42:30"
                date_uploaded_unix: 1628286150
                description_full: "Mero's journey takes us to the restaurants and bars of the countryside of the Dominican Republic, where the sound originated and retraces its rise to international recognition."
                genres: Array(2)
                0: "Documentary"
                1: "Music"
                length: 2
                [[Prototype]]: Array(0)
                id: 34562
                imdb_code: "tt15101380"
                language: "en"
                large_cover_image: "https://yts.mx/assets/images/movies/romeo_santos_king_of_bachata_2021/large-cover.jpg"
                medium_cover_image: "https://yts.mx/assets/images/movies/romeo_santos_king_of_bachata_2021/medium-cover.jpg"
                mpa_rating: ""
                rating: 0
                runtime: 92
                slug: "romeo-santos-king-of-bachata-2021"
                small_cover_image: "https://yts.mx/assets/images/movies/romeo_santos_king_of_bachata_2021/small-cover.jpg"
                state: "ok"
                summary: "Mero's journey takes us to the restaurants and bars of the countryside of the Dominican Republic, where the sound originated and retraces its rise to international recognition."
                synopsis: "Mero's journey takes us to the restaurants and bars of the countryside of the Dominican Republic, where the sound originated and retraces its rise to international recognition."
                title: "Romeo Santos: King of Bachata"
                title_english: "Romeo Santos: King of Bachata"
                title_long: "Romeo Santos: King of Bachata (2021)"
                torrents: Array(2)
                0: {url: "https://yts.mx/torrent/download/02ECD367633A26A1AC5848B01F78975D188A33D6", hash: "02ECD367633A26A1AC5848B01F78975D188A33D6", quality: "720p", type: "web", seeds: 60, …}
                1: {url: "https://yts.mx/torrent/download/12865C1A2BF3B865DAB98BD4D567117CC4381074", hash: "12865C1A2BF3B865DAB98BD4D567117CC4381074", quality: "1080p", type: "web", seeds: 72, …}
                length: 2
                [[Prototype]]: Array(0)
                url: "https://yts.mx/movies/romeo-santos-king-of-bachata-2021"
                year: 2021
                yt_trailer_code: ""