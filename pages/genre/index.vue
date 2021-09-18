<template>
  <div>
    <v-card class="pa-4" outlined>
      <h3>All genres</h3>
      <v-row class="mt-1">
        <v-col cols="6" sm="4" md="3" v-for="g in genres" :key="g.id">
          <v-btn :to="`/genre/${g.name}`" class=" text-capitalize" width="100%" outlined>{{ g.name }}</v-btn>
        </v-col>
      </v-row>
    </v-card>

  </div>
</template>

<script>
export default {
  computed: {
    genres() {
      return this.$store.state.genres
    },
  },

  beforeMount() {
    this.genres == '' ? this.$store.dispatch('getGenres') : ''
  },
}
</script>
