<template>
  <div>
    {{ $route.params.slug }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.getMovie()
  },

  methods: {
    async getMovie() {
      let textSearch = this.$route.params.slug
      const res = await this.$supabase
        .from('movies')
        .select('*')
        .like('name', textSearch)
      console.log('search result', res)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>