<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="2" v-for="m in movies" :key="m.id">
          <v-card  outlined>
            <div>
              <img width="100%" height="100%" :src="m.thumbnail" alt="">
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

  data(){
    return{
      movies: []
    }
  },

  mounted() {
    this.getMovieByGenre();
  },

  methods: {
    async getMovieByGenre() {

      let genre = this.$route.params.type 

      const res = await this.$supabase
        .from("movies")
        .select("*")
        .ilike("genres", `%${genre}%`)

      this.movies = res.data

      console.log('movie', res)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>