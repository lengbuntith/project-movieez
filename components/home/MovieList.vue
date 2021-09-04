<template>
  <div class="d-flex flex-wrap justify-space-around" lg="3" md="4" sm="6">
    <!-- <base-movie-card
      v-for="movie in home_movies"
      :key="movie.id"
      :movie="movie"
    /> -->

    <!-- <base-movie-cart-float-detail
      v-for="movie in home_movies"
      :key="movie.id"
      :movie="movie"
    /> -->

    <card-float 
    v-for="movie in home_movies" 
    :key="movie.id" 
    :movie="movie" />
  
  </div>
</template>

<script>
import BaseMovieCard from '../BaseMovieCard.vue'
import BaseMovieCartFloatDetail from '../BaseMovieCartFloatDetail.vue'
import CardFloat from '../CardFloat.vue'

export default {
  components: {
    BaseMovieCard,
    BaseMovieCartFloatDetail,
    CardFloat,
  },

  props: {
    home_movies: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="scss" scoped>
.holywood-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
  margin: 20px 10px;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  background-color: #ffffff;
}
.holywood-img {
  width: 100%;
  height: 270px;
}
.holywood-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: #3a3a3a;
  margin: 0px;
}
.holywood-txt {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
}
.holywood-txt strong {
  color: #979797;
  margin: 0px;
  text-align: center;
  height: 20px;
}
</style>
