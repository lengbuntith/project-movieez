<template>
<!-- hello world -->
<!-- hello world1 -->
<!-- hello world2 -->
<!-- hello world3 -->
  <v-app id="inspire">
    <the-header />

    <v-main class="grey lighten-2">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    
    <the-footer />
  
  </v-app>
</template>

<script>
import TheFooter from '~/components/footer/TheFooter.vue'
import TheHeader from '~/components/header/TheHeader.vue'
export default {
  components: { TheHeader, TheFooter },
}
</script>