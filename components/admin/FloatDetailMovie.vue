<template>
  <v-tooltip right>
    <template v-slot:activator="{ on, attrs }">
      <v-img
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
        :src="movie.medium_cover_image"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </template>
    <div style="width: 300px">
      {{ movie.title }} ({{movie.year}}) <br />
      <movie-rating :value="movie.rating" /> <br />
      {{ genre }} <br/> <br/>
      {{ movie.summary }}
    </div>
  </v-tooltip>
</template>

<script>
import MovieRating from './MovieRating.vue'
export default {
  components: { MovieRating },
  props: ['movie'],
  computed: {
    genre() {
      let text = ''
      for (let i = 0; i < this.movie.genres.length; i++) {
        text = i === 0 ? '' : `${text} `  +  this.movie.genres[i]
        console.log(text)
      }
      return text
    },
  },
}
</script>

<style lang="scss" scoped>
</style>