<template>
  <v-navigation-drawer class="" dark permanent app>
    <!-- block logo -->
    <div class="d-flex justify-start ml-5 align-center py-2 white--text">
      <div class="mr-2">
        <v-avatar> <img src="~/static/logo.jpg" alt="movieez" /> </v-avatar>
      </div>

      <div>free watch movies</div>
    </div>
    <!-- end block logo -->
    <v-divider></v-divider>

    <!-- block menu -->
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- end block menu -->
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home', link: '/' },
        { title: 'Genres', icon: 'mdi-view-dashboard', link: '/genre' },
        { title: 'Favorite', icon: 'mdi-heart', link: '/favorite' },
        { title: 'Account', icon: 'mdi-account', link: '/account' },

      ],
    }
  },


}
</script>