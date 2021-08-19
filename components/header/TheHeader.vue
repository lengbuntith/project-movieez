<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="cursor: pointer" @click="goHome">Movieez</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <!--  -->
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>