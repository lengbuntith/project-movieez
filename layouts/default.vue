<template>
  <v-app>
    <the-header />

    <v-main>
      <v-container id="wrapper">
        <div id="google_translate_element" style="display: none"></div>
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

  mounted() {
    this.$nuxt.$on('selectLanguage', (language) => {
      console.log('language', language)
      this.selectLanguage(language)
    })
  },

  beforeDestroy() {
    this.$nuxt.$off('selectLanguage')
  },

  methods: {
    selectLanguage(l) {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
        },
        'google_translate_element'
      )

      setTimeout(function () {
        var select = document.querySelector('select.goog-te-combo')
        console.log(select)
        select.value = l
        select.dispatchEvent(new Event('change'))
      }, 1000)

      setTimeout(function () {
        if (document.querySelector('[id=":1.container"]')) {
          document.querySelector('[id=":1.container"]').remove()
        }
      }, 2000)
    },
  },
}
</script>

<style lang="scss">
#wrapper {
  margin-bottom: 50px;
}
</style>