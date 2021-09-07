<template>
  <v-container>
    <!-- video player -->
    <v-card class="d-flex align-center justify-center" height="80vh">
      <iframe
        :src="movie.video"
        name="subs:https://bicfdwigabzwxeymwsnv.supabase.in/storage/v1/object/public/database/subtitles/khmer.srt"
        width="100%"
        height="100%"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </v-card>

    <!-- movie description -->
    <v-row class="mt-4">
      <v-col cols="2">
        <v-sheet class="d-flex align-center justify-center" height="200"
          >movie logo</v-sheet
        >
      </v-col>
      <v-col>
        <v-sheet class="d-flex align-center justify-center" height="200"
          >movie information</v-sheet
        >
      </v-col>
    </v-row>

    <!-- video trailer -->
    <v-card class="d-flex align-center justify-center" height="80vh">
      <iframe
        :src="movie.trailer"
        width="100%"
        height="100%"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </v-card>

    <!-- relate movies -->
    <v-sheet
      class="mt-10 mb-5 d-flex justify-center align-center"
      width="174"
      height="50"
      >relate movies</v-sheet
    >
    <v-row>
      <v-col v-for="i in 6" :key="i">
        <v-sheet height="150"></v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      movie: '',
    }
  },

  created () {
    //when open movie page --> close "left side"
    this.$nuxt.$emit('close-left-side')
  },

  beforeDestroy () {
    //when before leave movie page --> show "left side"
    this.$nuxt.$emit('open-left-side')
  },

  mounted() {
    this.getMovie()
  },

  methods: {
    async getMovie() {
      let id = this.$route.params.id
      const res = await this.$supabase.from('movies').select('*').eq('id', id)
      console.log('get movie', res)
      this.movie = res.data[0]
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

genre_id: (...)
id: (...)
imdb: (...)
name: (...)
synopsis: (...)
thumbnail: (...)
video: (...)