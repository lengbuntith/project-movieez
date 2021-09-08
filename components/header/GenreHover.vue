<template>
  <div class="text-center">
    <v-menu  open-on-hover  nudge-width="500" offset-x>
      <template v-slot:activator="{ on, attrs }">
        <span class=" white--text"  v-bind="attrs" v-on="on"> Genre </span>
      </template>

      <v-list class=" ml-10">
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
}
</script>