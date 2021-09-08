<template>
  <v-app-bar app>
    
    <v-app-bar-nav-icon
      @click="$nuxt.$emit('toggle-left-side')"
    ></v-app-bar-nav-icon>

    <div class="flex-grow-1 mr-4">
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

    <div>
      <v-switch
        v-model="switch1"
        hide-details
        inset
        @change="toggleDarkMode"
      ></v-switch>
    </div>
  </v-app-bar>
</template>

<script>
export default {
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

<style lang="scss" scoped>
</style>