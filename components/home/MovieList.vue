<template>
  <div class="d-flex flex-wrap justify-space-around">
    <div 
    style="height: 300px; cursor: pointer" 
    v-for="(movie, index) in home_movies" 
    :key="index"
    @click="()=> { 
      $router.push('/movie/'+ movie.id) }"
    >
      <div style="height: 250px">
        <img
          width="100%"
          height="100%"
          style="object-fit: contain"
          :src="movie.thumbnail"
        />
      </div>
      <div style="height: 50px">
        {{ movie.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      movies: [
        {
          id: 1,
          name: 'Avengers: Infinity War',
          imdb: 8.4,
          synopsis:
            'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain. —Marvel Studios',
          video: null,
          thumbnail:
            'https://img.yts.mx/assets/images/movies/avengers_infinity_war_2018/medium-cover.jpg',
          genres: 'ActionAdventure',
        },
        {
          id: 2,
          name: 'Black Panther',
          imdb: 7.3,
          synopsis:
            "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war. —Editor",
          video: null,
          thumbnail:
            'https://img.yts.mx/assets/images/movies/black_panther_2018/medium-cover.jpg',
          genres: 'Adventure',
        },
        {
          id: 7,
          name: 'The Suicide Squad',
          imdb: 7.5,
          synopsis:
            'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
          video: 'https://streamtape.com/e/DaBKLe2AKMhVRy/',
          thumbnail:
            'https://yts.mx/assets/images/movies/the_suicide_squad_2021/medium-cover.jpg',
          genres: 'ActionAdventureComedy',
        },
        {
          id: 3,
          name: 'name',
          imdb: 1,
          synopsis: '',
          video: '',
          thumbnail: '',
          genres: '',
        },
        {
          id: 4,
          name: 'Iron Man',
          imdb: 7.9,
          synopsis: '',
          video: 'https://streamtape.com/e/JoD6jalWo1sj411/',
          thumbnail: '',
          genres: '',
        },
        {
          id: 5,
          name: 'F9',
          imdb: 5.2,
          synopsis:
            "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.",
          video: 'https://streamtape.com/e/GQB6K1oJWbc1r4j/',
          thumbnail:
            'https://yts.mx/assets/images/movies/f9_2021/medium-cover.jpg',
          genres: '',
        },
        {
          id: 6,
          name: 'Avengers: Endgame',
          imdb: 8.4,
          synopsis:
            "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face...",
          video: 'https://streamtape.com/e/oLdyQO4okrsJ2Rj/',
          thumbnail:
            'https://yts.mx/assets/images/movies/avengers_endgame_2019/medium-cover.jpg',
          genres: '',
        },
      ],
    }
  },

  computed: {
    ...mapState(['home_movies']),
  },

  created() {
    console.log('created')
  },

  beforeMount() {
    console.log('before mount')
    this.getMovie()
  },

  methods: {
    ...mapMutations(['HOME_MOVIES']),
    async getMovie() {
      const res = await this.$supabase.from('movies').select('*')
      console.log('get movie', res)
      this.HOME_MOVIES(res.data)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
