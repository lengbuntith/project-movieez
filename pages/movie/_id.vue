<template>
  <v-container>
    <!-- video player -->
    <v-card outlined class="box">
      <iframe
        class="responsive-iframe"
        :src="movie.video"
        name="subs:https://bicfdwigabzwxeymwsnv.supabase.in/storage/v1/object/public/database/subtitles/khmer.srt"
        allowfullscreen
        allowtransparency
        scrolling="no"
        frameborder="0"
      ></iframe>
    </v-card>

    <!-- movies des -->
    <v-card outlined height="265" class="d-flex mt-12 pa-5">
      <!-- left -->
      <div class="mr-4">
        <v-img width="150" :src="movie.thumbnail"></v-img>
      </div>
      <!-- right -->
      <div style="height: 220px; overflow: hidden">
        <div>
          <span>{{ movie.name }}</span>
        </div>
        <div class="d-flex align-center">
          <v-rating
            readonly
            v-model="movie.imdb"
            background-color=""
            color="orange"
            dense
            class="ml-n1"
            small
            half-increments
          ></v-rating>
          <span> {{ movie.imdb }} </span>
        </div>

        <div class="mt-2">
          <span>{{ movie.synopsis }}</span>
        </div>
      </div>
    </v-card>

    <!-- end movies des -->

    <!-- video trailer -->
    <div class="mt-10 mb-4 text-left font-weight-bold">Watch trailer</div>
    <v-card class="d-flex justify-center align-center justify-center">
      <div class="box">
        <iframe
          allowfullscreen
          allowtransparency
          frameborder="0"
          class="responsive-iframe"
          :src="`https://youtube.com/embed/${movie.trailer}`"
        ></iframe>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      movie: '',
    }
  },

  async mounted() {
    await this.getMovie()
  },

  methods: {
    async getMovie() {
      let id = this.$route.params.id
      console.log('movie id = ', id)
      const res = await this.$supabase.from('movies').select('*').eq('id', id)
      console.log('get movie', res.data[0])
      this.movie = res.data[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>