<template>
  <div class="text-center">
    
    <v-dialog v-model="dialog" width="90%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on" height="50">
          Add Multiple movies
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Submit changed
          <v-spacer />
          <v-btn @click="dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card class="pa-4">

          <!-- search bar -->
          <v-text-field
            type="text"
            placeholder="search movie..."
            v-model="search_text"
            outlined
            color
            clearable
            @input="$store.dispatch('searchMovies', {text: search_text} )"
          ></v-text-field>
          <!-- end - search bar -->

          <!-- list movies  -->
          <list-movies :movies_yts="movies_yts" />
          <!-- end - list movies  -->

        </v-card>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" text @click="dialog = false"> Post </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ListMovies from './ListMovies.vue'
import {  mapState } from 'vuex'
export default {
  components: {ListMovies},
  data() {
    return {
      dialog: false,
      search_text: ''
    }
  },

  computed: {
     ...mapState({
      movies_yts: 'search_movies'
    })
  },
}
</script>