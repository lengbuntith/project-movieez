<template>
  <div class="text-center">
    <v-dialog persistent v-model="dialog_trailer" width="630">
      <v-card v-if="dialog_trailer" class="pa-4">
        <iframe
          :src="`https://www.youtube.com/embed/${select_trailer.trailer}?rel=0&wmode=transparent&border=0&autoplay=1&iv_load_policy=3`"
          frameborder="0"
          width="600"
          height="400"
        ></iframe>
      </v-card>
      <v-btn @click="closeDialog">close</v-btn>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['dialog_trailer', 'select_trailer']),
  },

  methods: {
    closeDialog() {
      this.$store.commit('SET_DIALOG_TRAILER', false)
    },
  },
}
</script>