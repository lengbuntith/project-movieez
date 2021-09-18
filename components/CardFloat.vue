<template>
  <div class="text-center">
    <v-menu v-model="show" open-on-hover :left="true"  offset-x>
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <base-movie-card :movie="movie" />
        </div>
      </template>

      <v-card
        width="220"
        height="354"
        color="rgb(0, 0, 0, 01)"
        class="white--text pa-2"
      >
        {{ movie.name }} <br />
        <base-movie-card-rating :value="movie.imdb" /> <br />
        {{ genre }} <br />
        <br />
        {{ movie.synopsis.slice(0, 160) }}... <br />
        <v-btn @click="openDialogTrailer" small elevation="" color=""
          >watch trailer</v-btn
        >
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import BaseMovieCard from './BaseMovieCard.vue'
import BaseMovieCardRating from './BaseMovieCardRating.vue'
export default {
  props: {
    movie: {
      type: Object,
      default: {},
    },

    indexSlide :{
      type: Number
    }
  },

  components: {
    BaseMovieCard,
    BaseMovieCardRating,
  },

  data: () => ({
    show: false,
  }),

  computed: {
    genre() {
      var s = this.movie.genres
      s = s.replace(/([A-Z])/g, ' $1').trim()
      return s
    },

    cardFloatPosition() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 220
        case 'sm':
          return 400
        case 'md':
          return 500
        case 'lg':
          return 'left'
        case 'xl':
          return 800
      }
    },
  },

  methods: {
    openDialogTrailer() {
      this.show = false
      this.$store.commit('SET_DIALOG_TRAILER', true)
      this.$store.commit('SET_SELECT_TRAILER', this.movie)
    },
  },
}
</script>