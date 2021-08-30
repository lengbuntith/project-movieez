<template>
  <div>
    <!-- dialog -->
    <div class="d-flex justify-center mb-6">
      <v-dialog v-model="dialog" width="90%">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            height="50"
          >
            Import Movies
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Add new movie
            <v-spacer />
            <v-btn @click="dialog = false" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card class="pa-4">
            <!-- search bar -->
            <v-text-field
              autofocus
              type="text"
              placeholder="search movie..."
              v-model="search_text"
              outlined
              color
              clearable
              @input="$store.dispatch('searchMovies', { text: search_text })"
            ></v-text-field>
            <!-- end - search bar -->

            <!-- list movies  -->
            <v-row>
              <v-col
                v-for="m in movies_yts"
                @click="selectMovie(m)"
                :key="m.id"
                class="d-flex child-flex"
                cols="2"
                style="cursor: pointer"
              >
                <float-detail-movie :movie="m" />
              </v-col>
            </v-row>
            <!-- end - list movies  -->
          </v-card>

          <v-divider></v-divider>

          <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" text @click="dialog = false"> Post </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- end dialog -->

    <!-- input field -->
    <v-card class="bg-white pa-10 mt-4">
      <v-text-field
        type="text"
        label="Movie Name"
        v-model="movie.name"
        append-icon=""
        outlined
        color
      ></v-text-field>

      <v-text-field
        type="text"
        label="Movie release"
        v-model="movie.year"
        append-icon=""
        outlined
        color
      ></v-text-field>

      <v-text-field
        type="text"
        label="Movie Genres"
        append-icon=""
        v-model="movie.genres"
        outlined
        color
      ></v-text-field>

      <v-textarea
        type="text"
        label="Movie description"
        v-model="movie.description"
        append-icon=""
        outlined
        color
      ></v-textarea>
    </v-card>
    <!-- end input field -->

    <!-- copy torrents -->
    <v-card class="bg-white pa-10 mt-4 text-center">
      <a style="text-decoration: none" :href="movie.torrent" download="">
        <v-btn color="primary"> Download Torrent </v-btn>
      </a>
    </v-card>

    <!-- end copy torrents -->

    <!-- upload torrent to streamtape -->
    <v-card class="bg-white pa-10 mt-4">
      <v-text-field
        @click="getUrl"
        type="text"
        label="Url Download"
        v-model="url"
        append-icon=""
        outlined
        color
        clearable
      ></v-text-field>

      <!-- button upload to streamtape -->
      <div class="text-center">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="blue-grey"
          class="ma-2 white--text"
          @click="remoteUpload('streamtape')"
        >
          remoteUpload to streamptape
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>

        <v-btn
          :loading="loading"
          :disabled="loading"
          color="blue-grey"
          class="ma-2 white--text"
          @click="remoteUpload('doodstream')"
        >
          remoteUpload to DoodStream
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>
      </div>
    </v-card>
    <!-- end upload torrent to streamtape -->

    <!-- upload to supabase -->

    <v-card class="bg-white pa-10 mt-4">
      <div class="d-flex justify-center align-center">
        <div class="text-capitalize">
          {{ remoteStatus }}
        </div>

        <div v-if="remoteStatus === 'downloading'" class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="d-flex justify-center">
        <v-btn
          v-if="postStatus === ''"
          class=""
          color="primary"
          @click="postMovie"
        >
          Post Movie
        </v-btn>
        <div v-else class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </v-card>

    <!-- end upload to supabase -->
  </div>
</template>

<script>
import axios from 'axios'
import ListMovies from '../../../components/admin/ListMovies.vue'
import FloatDetailMovie from '../../../components/admin/FloatDetailMovie.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ListMovies,
    FloatDetailMovie,
  },

  computed: {
    ...mapState({
      movies_yts: 'search_movies',
    }),
  },

  data: () => ({
    dialog: false,
    search_text: '',

    loading: false,
    loader: null,

    movie: {
      name: '',
      year: '',
      description: '',
      genres: '',
      thumbnail: '',
      rating: 0,
      files: [],
      torrent: '',
    },

    url: '',
    remoteId: '',
    remoteStatus: '',
    remoteUrl: '',

    postStatus: '',
  }),

  methods: {
    selectMovie(movie) {
      console.log('select movie', movie)

      let genre = ''
      for (let i = 0; i < movie.genres.length; i++) {
        genre = genre + movie.genres[i]
      }

      console.log('genres', genre)

      this.movie = {
        name: movie.title,
        year: movie.year,
        description: movie.description_full,
        genres: genre,
        rating: movie.rating,
        thumbnail: movie.medium_cover_image,
        files: [],
        torrent: movie.torrents[0].url,
      }

      this.dialog = false
    },

    //remote upload to server
    remoteUpload(server) {
      if (server === 'streamtape') {
        this.remoteUploadStreamTape()
      }

      if (server === 'doodstream') {
        this.remoteUploadDoodStream()
      }
    },

    //check status remote upload
    checkRemoteStatus(server, id) {
      if (server === 'streamtape') {
        this.checkRemoteStatusStreamtape(id)
      }

      if (server === 'doodstream') {
        this.checkRemoteStatusDoodStream(id)
      }
    },

    //streamtape
    remoteUploadStreamTape() {
      console.log('streamtape start upload')
      this.loader = 'loading'
      let login = '2d483508a0d5c3f3040f'
      let key = 'WbGlAZw92Dhbx6D'
      let url = this.url.replace('&', '%26')
      console.log('url', url)
      axios
        .post(`/api2/remotedl/add?login=${login}&key=${key}&url=${url}`)
        .then((res) => {
          console.log('streamtape sending...', res)
          this.checkRemoteStatus('streamtape', res.data.result.id)

          var interval = setInterval(() => {
            this.checkRemoteStatus('streamtape', res.data.result.id)
            if (this.remoteStatus === 'finished') {
              clearInterval(interval)
            } else if (this.remoteStatus === 'error') {
              clearInterval(interval)
            }
          }, 15000)
        })
    },

    checkRemoteStatusStreamtape(id) {
      console.log('streamtape start check remote status')
      let login = '2d483508a0d5c3f3040f'
      let key = 'WbGlAZw92Dhbx6D'

      axios
        .get(`/api2/remotedl/status?login=${login}&key=${key}&id=${id}`)
        .then((res) => {
          console.log('streamtape checking...', res)
          console.log(Object.values(res.data.result))
          var value = Object.values(res.data.result)
          this.remoteStatus = res.data.result.value[0].status
          this.remoteUrl = 'https://streamtape.com/e/' + value[0].linkid + '/'
          console.log(this.remoteStatus)
          console.log(this.remoteUrl)
        })
    },

    // --- DOODSTREAM --- //
    async remoteUploadDoodStream() {
      let api_key = '51660e2fv6ze05uabp27g'
      let upload_url = this.url.replace('&', '%26')

      const res = await axios.get(
        `/api3/upload/url?key=${api_key}&url=${upload_url}`
      )
      console.log(res)

      this.remoteUrl = 'https://dood.la/d/' + res.data.result.filecode
      console.log('doodstream remote url', this.remoteUrl)

      console.log('doodstream upload status', res)

      this.checkRemoteStatus('doodstream', res.data.result.filecode)

      var interval = setInterval(() => {
        this.checkRemoteStatus('doodstream', res.data.result.filecode)
        if (this.remoteStatus === 'working') {
          clearInterval(interval)
        } 
      }, 15000)

    },

    checkRemoteStatusDoodStream(id) {
      console.log('doodstream start check remote status')
      let api_key = '51660e2fv6ze05uabp27g'

      axios
        .get(`/api3/urlupload/status?key=${api_key}&file_code=${id}`)
        .then((res) => {
          console.log('doodstream checking...', res)
          this.remoteStatus = res.data.result[0].status
        })
    },

    async postMovie() {
      this.postStatus = 'start'
      const res = await this.$supabase.from('movies').insert([
        {
          name: this.movie.name,
          imdb: this.movie.rating,
          video: this.remoteUrl,
          thumbnail: this.movie.thumbnail,
          genres: this.movie.genres,
          synopsis: this.movie.description,
        },
      ])
      console.log('post movie', res)
      this.postStatus = ''
    },

    getUrl() {
      setTimeout(async () => {
        const text = await navigator.clipboard.readText()
        console.log(text)
        this.url = text
      }, 1000)
    },
  },

  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>

<style lang="scss" scoped>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: black;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>

select_movie:Object
background_image:"https://yts.mx/assets/images/movies/spider_man_far_from_home_2019/background.jpg"
background_image_original:"https://yts.mx/assets/images/movies/spider_man_far_from_home_2019/background.jpg"
date_uploaded:"2019-09-12 18:19:47"
date_uploaded_unix:1568305187
description_full:"Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent. —Sony Pictures Entertainment"
genres:Array[3]
id:13596
imdb_code:"tt6320628"
language:"en"
large_cover_image:"https://yts.mx/assets/images/movies/spider_man_far_from_home_2019/large-cover.jpg"
medium_cover_image:"https://yts.mx/assets/images/movies/spider_man_far_from_home_2019/medium-cover.jpg"
mpa_rating:"PG-13"
rating:7.5
runtime:129
slug:"spider-man-far-from-home-2019"
small_cover_image:"https://yts.mx/assets/images/movies/spider_man_far_from_home_2019/small-cover.jpg"
state:"ok"
summary:"Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent. —Sony Pictures Entertainment"
synopsis:"Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent. —Sony Pictures Entertainment"
title:"Spider-Man: Far from Home"
title_english:"Spider-Man: Far from Home"
title_long:"Spider-Man: Far from Home (2019)"
torrents:Array[5]
url:"https://yts.mx/movies/spider-man-far-from-home-2019"
year:2019
yt_trailer_code:


torrents: Array(5)
  0:
  date_uploaded: (...)
  date_uploaded_unix: (...)
  hash: (...)
  peers: (...)
  quality: (...)
  seeds: (...)
  size: (...)
  size_bytes: (...)
  type: (...)
  url: (...

  https://de14.seedr.cc/ff_get/982370238/Spider-Man.Far.From.Home.2019.720p.BluRay.x264-[YTS.LT].mp4?st=xar9JvhZ3KLrah3U-nBxWg&e=1629297769



  data:
      msg: "OK"
      result:
        AvJowNkc5qk:
          added: "2021-08-17 15:08:15"
          bytes_loaded: 944660478
          bytes_total: 944660478
          folderid: "X49SeZg9r6Y"
          id: "AvJowNkc5qk"
          last_update: "2021-08-17 15:08:17"
          linkid: "kvvM8kQPXPtOGGB"
          remoteurl: "https://de19.seedr.cc/ff_get/982378992/Hulk.2003.720p.BrRip.x264.BOKUTOX.YIFY.mp4?st=A-C3_ZpriLCh_Ob2c91Mtg&e=1629299288"
          status: "finished"
          url: "https://streamtape.com/v/kvvM8kQPXPtOGGB"
          [[Prototype]]: Object
          [[Prototype]]: Object
          status: 200
          [[Prototype]]: Objec

  // https://streamtape.com/e/kvvM8kQPXPtOGGB/" 