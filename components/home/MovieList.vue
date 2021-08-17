<template>
    <v-row>
    <template v-for="n in 4">
      <v-col :key="n" class="mt-2" cols="12">
        <strong>Category {{ n }}</strong>
      </v-col>

      <v-col v-for="j in 6" :key="`${n}${j.id}`" cols="6" md="2">
        <v-sheet style="cursor: pointer"  @click="()=> {$router.push('/moviedetail')}" height="150">
        </v-sheet>
      </v-col>
    </template>
  </v-row>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>