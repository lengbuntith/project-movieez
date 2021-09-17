<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows
    style="padding: 20px 0px 0px 0px; margin: -30px -60px 20px 0px"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
          v-for="(item, index) in items"
          :key="index"
        >
          <div>
            <div
              style="cursor: pointer"
              @click="
                () => {
                  $router.push('/movie/' + hollywoods[i].id)
                }
              "
            >
              <img :src="items[i]" />
              <div v-if="hollywoods.length > 0" class="top-left">
                {{ hollywoods[i].name }}
              </div>
            </div>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'https://wallpaperaccess.com/full/1109060.jpg',
        'https://th.bing.com/th/id/R.1927ba692b47028e61b87d888f4a0173?rik=TnaFtpI0lsiXxw&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.b46e09620aa1c93e2c1901e701f75f15?rik=scTUoQxcgeNpTQ&pid=ImgRaw&r=0',
        'https://www.thedrive.com/content/2021/04/maxresdefault.jpeg?quality=85',
        'https://th.bing.com/th/id/R.a24323968bc4244cce2e7d1f747bae78?rik=1VApQgmRf8fkYQ&pid=ImgRaw&r=0',
      ],
      slides: ['Venom', 'Aladin', 'F9', 'Avenger: Endgame', 'Power Ranger'],
      films: ['26', '72', '5', '6', '14'],

      hollywoods: [],
    }
  },

  async mounted() {
    const res = await this.$supabase
      .from('movies')
      .select('*')
      .in('id', ['26', '14', '5', '6', '72'])
    console.log('get hollywoods', res)

    this.hollywoods = res.data.reverse()
  },
}
</script>

<style scoped>
.top-left {
  position: absolute;
  top: 0px;
  left: 0px;
  font: Sans serif;
  padding: 0px 10px 0px 10px;
  margin: 10px 0px 0px 10px;
  font: sans-serif;
  color: #fff;
  font-size: large;
  font-family: ' Roboto,Helvetica Neue,sans-serif;';
  background-color: #303030;
}
</style>
