<template>
  <v-navigation-drawer class="" dark permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Movieez </v-list-item-title>
        <v-list-item-subtitle> free watch movies </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
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
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', link: '/' },
        { title: 'Account', icon: 'mdi-account-box', link: '/a' },
        { title: 'Admin', icon: 'mdi-gavel', link: '/admin' },
      ],
    }
  },
}
</script>