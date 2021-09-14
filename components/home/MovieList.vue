<template>
  <div>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
      style="padding: 20px 0px 0px 0px; margin: 0px 0px 20px 0px"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet

          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            v-for="(item, index) in items" :key="index"
          >
            <div >
              <div style="cursor: pointer"
                @click="()=>{
                $router.push('/movie/' + films[i])
                }"
              >
                <img :src="items[i]">
                <div class="top-left">{{ slides[i] }}</div>
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div>
      <router-link to="/allmovie/hollywood" class="nav-link">
        <button class="movie-type">
          <strong>TOP HOLLYWOOD</strong>
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </router-link>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <base-movie-slide  :movies="home_movies"/>
    </div>
  </div>
</template>

<script>
import BaseMovieCard from '../BaseMovieCard.vue'
import CardFloat from '../CardFloat.vue'

export default {
  components: {
    BaseMovieCard,
    CardFloat,
  },

  props: {
    home_movies: {
      type: Array,
      default: [],
    },
  },

  data () {
      return {
        items: [
          'https://th.bing.com/th/id/R.1927ba692b47028e61b87d888f4a0173?rik=TnaFtpI0lsiXxw&pid=ImgRaw&r=0',
          'https://wallpaperaccess.com/full/1109060.jpg',
          'https://www.thedrive.com/content/2021/04/maxresdefault.jpeg?quality=85',
          'https://th.bing.com/th/id/R.b46e09620aa1c93e2c1901e701f75f15?rik=scTUoQxcgeNpTQ&pid=ImgRaw&r=0',
          'https://th.bing.com/th/id/R.a24323968bc4244cce2e7d1f747bae78?rik=1VApQgmRf8fkYQ&pid=ImgRaw&r=0',
        ],
        slides: [
          'Venom',
          'Aladin',
          'F9',
          'Avenger: Endgame',
          'Power Ranger',
        ],
        films: [
          '26',
          '72',
          '5',
          '6',
          '14',
        ]
      }
    },

  //   async mounted () {
  //     const res = await this.$supabase.from('movies').select('*').in('id', ['6','8','26','5','72'])
  //     console.log('get films',res)

  //     this.films = res.data
  // },
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

  .top-left {
  position: absolute;
  top: 0px;
  left: 0px;
  font: Sans serif;
  padding: 0px 10px 0px 10px;
  margin: 10px 0px 0px 10px;
  font: sans-serif;
  color: white; 
  font-size: large;
  font-family:  ' sans-serif';
  background-color: #3f5455;
}
</style>
