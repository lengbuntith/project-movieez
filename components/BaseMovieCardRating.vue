<template>
  <v-rating
    half-increments
    length="5"
    readonly
    size="20"
    color="orange"
    dense
    :value="value"
  ></v-rating>
</template>

<script>
export default {
  props: ['value'],
}
</script>

<style lang="scss" scoped>
</style>