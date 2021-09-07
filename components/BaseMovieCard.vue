<template>
  <div
    class="holywood-box"
    style="cursor: pointer"
    @click="()=>{
      $router.push('/movie/' + movie.id)
    }"
  >
    <div class="holywood-img">
      <img width="250px" :src="movie.thumbnail" />
    </div>
    <div class="holywood-txt">
      <strong>{{ movie.name }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    movie: {
      type: Object,
      default: {},
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
  width: 150px;
  background-color: #ffffff;
}
.holywood-img {
  width: 100%;
  height: 180px;
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
