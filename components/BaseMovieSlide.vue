<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(movie, index) in movies" :key="movie.id">
      <card-float v-if="showFloat" :movie="movie" :index="index" />
      <base-movie-card v-else :movie="movie" />
    </swiper-slide>

    <svg
      width="18px"
      height="17px"
      viewBox="0 0 18 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="swiper-button-prev d-none d-md-block"
      slot="button-prev"
    >
      <g
        id="prev"
        transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)"
      >
        <polygon
          class="arrow"
          points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
        ></polygon>
        <polygon
          class="arrow-fixed"
          points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
        ></polygon>
        <path
          d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"
        ></path>
      </g>
    </svg>

    <svg
      width="18px"
      height="17px"
      viewBox="-1 0 18 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="swiper-button-next d-none d-md-block"
      slot="button-next"
    >
      <g>
        <polygon
          class="arrow"
          points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
        ></polygon>
        <polygon
          class="arrow-fixed"
          points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
        ></polygon>
        <path
          d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"
        ></path>
      </g>
    </svg>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import CardFloat from './CardFloat.vue'
import BaseMovieCard from './BaseMovieCard.vue'

export default {
  props: {
    categoryName: {
      type: String,
      default: '',
    },

    showFloat: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    CardFloat,
    BaseMovieCard,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,

        breakpoints: {
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
            slidesPerGroup: 6,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      movies: [],
    }
  },

  created() {
    this.getMoviesByCategory()
  },

  methods: {
    async getMoviesByCategory() {
      const res = await this.$supabase
        .from('movies')
        .select('*')
        .ilike('genres', `%${this.categoryName}%`)

      this.movies = res.data
    },
  },
}
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.2, 1, 0.3, 1);

svg {
  width: 40px;
  height: auto;
  cursor: pointer;
  overflow: visible;
  fill: white;
  polygon,
  path {
    transition: all 0.5s $ease;
  }
  &:hover polygon,
  &:hover path {
    transition: all 1s $ease;
    fill: #ff4136;
  }

  &:hover .arrow {
    animation: arrow-anim 2.5s $ease infinite;
  }
  &:hover .arrow-fixed {
    animation: arrow-fixed-anim 2.5s $ease infinite;
  }
}

@keyframes arrow-anim {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  5% {
    transform: translateX(-0.1rem);
  }
  100% {
    transform: translateX(1rem);
    opacity: 0;
  }
}

@keyframes arrow-fixed-anim {
  5% {
    opacity: 0;
  }
  20% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>