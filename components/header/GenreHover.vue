<template>
  <div class="text-center">
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="notranslate" plain text v-bind="attrs" v-on="on">
          Genres
        </v-btn>
      </template>

      <v-card max-width="500" outlined class="menu pa-5">
        <v-row>
          <v-col v-for="g in genres" :key="g.id" lg="3">
            <nuxt-link
              class="text-decoration-none white--text font-weight-thin"
              :to="`/genre/${g.name}`"
            >
              {{ g.name }}
            </nuxt-link>
          </v-col>
        </v-row>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ['genres'],
}
</script>