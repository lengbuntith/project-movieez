<template>
  <div v-if="cartoons.length > 0">
    <!-- <carousel-slide /> -->
    <carousel-swiper />

    <div>
      <router-link to="/allmovie/hollywood" class="nav-link">
        <button class="movie-type">
          <strong>TOP HOLLYWOOD</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <movie-list :home_movies="home_movies" />
    <video-trailer />

    <div>
      <router-link to="/allmovie/korean" class="nav-link">
        <button class="movie-type">
          <strong>KOREAN</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <movie-list title_movie="KOREAN" :home_movies="popcorns" />
    <video-trailer />

    <div>
      <router-link to="/allmovie/cartoon" class="nav-link">
        <button class="movie-type">
          <strong>CARTOON</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <movie-list title_movie="KOREAN" :home_movies="cartoons" />
    <video-trailer />
  </div>
</template>

<script>
import MovieList from '~/components/home/MovieList.vue'
import { mapMutations, mapState } from 'vuex'
import VideoTrailer from '~/components/VideoTrailer.vue'
import CarouselSlide from '~/components/CarouselSlide.vue'
import CarouselSwiper from '~/components/CarouselSwiper.vue'

export default {
  components: { MovieList, VideoTrailer, CarouselSlide, CarouselSwiper },

  computed: {
    ...mapState(['home_movies']),
  },

  beforeMount() {
    console.log('before mount')
    this.getMovie()
  },
  data() {
    return {
      popcorns: [],
      cartoons: [],
    }
  },

  async mounted() {
    const res = await this.$supabase
      .from('movies')
      .select('*')
      .in('id', ['26', '14', '5', '6', '72', '8', '1'])
    console.log('get korean', res)

    this.popcorns = res.data.reverse()
    this.cartoons = res.data
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
