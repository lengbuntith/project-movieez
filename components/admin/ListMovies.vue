<template>
  <v-row>
    <v-col
      v-for="m in movies_yts"
      :key="m.id"
      class="d-flex child-flex"
      cols="2"
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

