<template>
  <div>
    <carousel-swiper />

    <div>
      <router-link to="/allmovie/hollywood" class="nav-link">
        <button class="movie-type">
          <strong>TOP HOLLYWOOD</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <base-movie-slide />

    <div>
      <router-link to="/allmovie/korean" class="nav-link">
        <button class="movie-type">
          <strong>KOREAN</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <base-movie-slide/>

    <div>
      <router-link to="/allmovie/cartoon" class="nav-link">
        <button class="movie-type">
          <strong>CARTOON</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <base-movie-slide categoryName="Animation"/>
    <video-trailer />

  </div>
</template>

<script>

export default {
  methods: {
    //api move to base movie slide component
  },
}

</script>

<style lang="scss" scoped>
.nav-link {
  text-decoration-line: none;
}
.nav-link :hover {
  color: black;
  background-color: rgb(172, 171, 170);
}
.movie-type {
  padding: 0px 10px 0px 10px;
}
</style>
