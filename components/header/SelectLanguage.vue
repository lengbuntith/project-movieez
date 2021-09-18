<template>
  <div class="d-flex">
    <country-flag
      @click.native="selectLanguage('km')"
      country="kh"
      size="normal"
    />
    <v-divider vertical></v-divider>
    <country-flag
      @click.native="selectLanguage('en')"
      country="us"
      size="normal"
    />
  </div>
</template>

<script>
export default {
  methods: {
    selectLanguage(l) {
      this.$nuxt.$emit('selectLanguage', l)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>