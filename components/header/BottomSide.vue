<template>
  <div id="bottom-nav">
    <v-bottom-navigation class="d-md-none" color="teal" grow>
      <v-btn 
      v-for="(item, index) in items" 
      :key="index" 
      :to="item.link">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home', link: '/' },
      { title: 'Genres', icon: 'mdi-filter', link: '/genre' },
      { title: 'Favorite', icon: 'mdi-heart', link: '/favorite' },
      { title: 'Account', icon: 'mdi-account', link: '/account' },
    ],
  }),
}
</script>

<style lang="scss" scoped>
#bottom-nav {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
}
</style>