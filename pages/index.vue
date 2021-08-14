<template>
  <div></div>
</template>

<script>
export default {
  async mounted() {
    const res = await this.$supabase.from('movies').select('*').ilike('genre_id', '%23%')
    console.log(res.data)
    const res2 = await this.$axios.get('movie_suggestions.json')
    console.log(res2)
  },
}
</script>

<style lang="scss" scoped>
</style>