
<template>
  <swiper class="swiper mb-10 rounded-lg" :options="swiperOption">
    <swiper-slide v-for="s in slides" :key="s.id">
      <v-img
        gradient="to left bottom, rgba(0,0,0,.33), rgba(0,0,0,.33)"
        class="align-end"
        max-height="420px"
        min-height="220px"
        :src="s.image_url"
      >
        <div
          style="
            max-width: 500px;
            max-height: 200px;
            overflow: hidden;
            margin: 15px;
          "
        >
          <h1 style="font-weight: 400">{{ s.title }}</h1>
          <span class="font-weight-thin"
            >{{s.subtitle}}</span
          >
        </div>
      </v-img>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-autoplay',
  title: 'Autoplay',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      slides: [],
    }
  },

  created() {
    //get slides from backend
    this.getSlides()
  },

  methods: {
    async getSlides() {
      const res = await this.$supabase.from('slides').select('*')
      this.slides = res.data
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  max-height: 420px;
  min-height: 220px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
}
</style>