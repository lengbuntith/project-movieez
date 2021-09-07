export const state = () => ({
    search_movies: [],
    select_movie: '',
    home_movies: [],
    dialog_trailer: false,
    select_trailer: '',
})

export const getters = {
    reverseSearchMovies: state => {
        return state.search_movies;
    },
}
  
export const mutations = {
    SEARCH_MOVIES(state, data) {
        state.search_movies = data
    },

    SELECT_MOVIE(state, data){
        state.select_movie = data
    },

    HOME_MOVIES(state, data){
        state.home_movies = data
    },

    SET_DIALOG_TRAILER(state, data){
        state.dialog_trailer = data
    },

    SET_SELECT_TRAILER(state, data){
        state.select_trailer = data
    },
}


export const actions = {
    searchMovies({commit}, {text}){
        this.$axios.get(`/yts/list_movies.json?query_term=${text}&order_by=desc`)
        .then((res) => {
            console.log("🚀 ~ file: index.js ~ line 19 ~ searchMovies ~ res", res)
            commit("SEARCH_MOVIES", res.data.data.movies)
        })  
    }
}