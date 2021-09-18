<template>
  <v-app-bar app>
    <v-container class="py-0 px-0 fill-height">
      <the-logo />

      <v-spacer />
      <!-- search box for desktop -->
      <div class="mr-4 d-none d-sm-block" style="max-width: 300px">
        <v-text-field
          dense
          rounded
          hide-details
          outlined
          placeholder="search..."
          v-model="search"
          @keypress.enter="searchMovie"
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <!-- end search box for desktop -->

      <!-- search  for mobile -->
      <v-btn class="d-sm-none mr-4" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!-- end search for mobile -->

      <div>
        <v-switch
          v-model="switch1"
          hide-details
          inset
          @change="toggleDarkMode"
        ></v-switch>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import TheLogo from './TheLogo.vue'
export default {
  components: {
    TheLogo,
  },

  data() {
    return {
      switch1: false,
      search: '',
    }
  },

  methods: {
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },

    searchMovie() {
      console.log(this.search)
      this.$router.push('/search/' + this.search)
    },
  },
}
</script>