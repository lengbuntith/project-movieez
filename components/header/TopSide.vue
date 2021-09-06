<template>
  <v-app-bar app>
    <div class="ml-7">
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

    <v-spacer></v-spacer>

    <div>
      <v-switch
        v-model="switch1"
        hide-details
        inset
        @change="toggleDarkMode"
        :label="`Switch 1: ${switch1.toString()}`"
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