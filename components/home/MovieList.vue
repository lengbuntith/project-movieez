<template>
  <div class="d-flex flex-wrap justify-space-around">
    <div 
    style="height: 300px; cursor: pointer" 
    v-for="(movie, index) in home_movies" 
    :key="index"
    @click="()=> { 
      $router.push('/movie/'+ movie.id) }"
    >
      <div style="height: 250px">
        <img
          width="100%"
          height="100%"
          style="object-fit: contain"
          :src="movie.thumbnail"
        />
      </div>
      <div style="height: 50px">
        {{ movie.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    home_movies: {
      type: Array,
      default: []
    }
  },
 
}
</script>

<style lang="scss" scoped>
</style>
