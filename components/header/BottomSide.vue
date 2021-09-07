<template>
  <v-bottom-navigation v-if="show" class="d-md-none" :value="value" color="teal" grow>
    <v-btn v-for="(item, index) in items" :key="index" :to="item.link">
      <span>{{ item.title }}</span>

      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    show: true,
    items: [
      { title: 'Home', icon: 'mdi-home', link: '/' },
      { title: 'Genres', icon: 'mdi-view-dashboard', link: '/genre' },
      { title: 'Favorite', icon: 'mdi-heart', link: '/favorite' },
      { title: 'Account', icon: 'mdi-account', link: '/account' },
    ],
  }),

  created () {
      this.$nuxt.$on('close-left-side', () => {
        this.show = false
    })
  },

  beforeDestroy () {
      this.$nuxt.$off('close-left-side')
  },
}
</script>