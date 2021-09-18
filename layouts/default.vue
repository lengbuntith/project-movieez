<template>
  <v-app>
    <the-header />

    <v-main>
      <v-container id="wrapper">
        <nuxt />
      </v-container>
    </v-main>

    <bottom-side />
  </v-app>
</template>

<script>
import BottomSide from '~/components/header/BottomSide.vue'
// import TheFooter from '~/components/footer/TheFooter.vue'
import TheHeader from '~/components/header/TheHeader.vue'
export default {
  components: { TheHeader, BottomSide },
}
</script>

<style lang="scss" scoped>
#wrapper {
  margin-bottom: 50px;
}
</style>