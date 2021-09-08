<template>
  <v-navigation-drawer v-model="drawer" dark app>
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
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ item[0].icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item[0].title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ item[1].icon }}</v-icon>
        </v-list-item-icon>

        <genre-hover />

        <!-- <v-list-item-content>
          <v-list-item-title>{{ item[1].title }}</v-list-item-title>
        </v-list-item-content> -->
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ item[2].icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item[2].title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ item[3].icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item[3].title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- end block menu -->
  </v-navigation-drawer>
</template>

<script>
import GenreHover from './GenreHover.vue'
export default {
  components: { GenreHover },
  data() {
    return {
      drawer: null,
      item: [
        { title: 'Home', icon: 'mdi-home', link: '/' },
        { title: 'Genres', icon: 'mdi-view-dashboard', link: '/genre' },
        { title: 'Favorite', icon: 'mdi-heart', link: '/favorite' },
        { title: 'Account', icon: 'mdi-account', link: '/account' },
      ],
    }
  },

  computed: {
    breakpoint() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return false
        case 'sm':
          return false
        case 'md':
          return true
        case 'lg':
          return true
        case 'xl':
          return true
      }
    },
  },

  watch: {
    //after computed value 'breakpoint' then change value 'drawer'
    breakpoint(newValue, oldValue) {
      this.drawer = newValue
    },
  },

  created() {
    //if other component call this event --> close left side
    //to call this event :  this.$nuxt('event-name')
    this.$nuxt.$on('close-left-side', () => {
      this.drawer = false
    })

    this.$nuxt.$on('open-left-side', () => {
      this.drawer = true
    })

    this.$nuxt.$on('toggle-left-side', () => {
      this.drawer = !this.drawer
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('close-left-side')
    this.$nuxt.$off('open-left-side')
    this.$nuxt.$off('toggle-left-side')
  },
}
</script>