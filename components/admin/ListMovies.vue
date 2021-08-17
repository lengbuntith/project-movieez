<template>
  <v-row>
    <v-col
      v-for="m in movies_yts"
      @click="$store.commit('SELECT_MOVIE', m)"
      :key="m.id"
      class="d-flex child-flex"
      cols="2"
      style=" cursor: pointer"
    >
      <float-detail-movie :movie="m" />
    </v-col>
  </v-row>
</template>

<script>
import FloatDetailMovie from './FloatDetailMovie.vue'
export default {
  components: { FloatDetailMovie },
  props: ['movies_yts'],
  data() {
    return {}
  },
}
</script>

