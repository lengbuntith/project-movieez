export const state = () => ({
    search_movies: [],
    select_movie: ''
})

export const getters = {
    reverseSearchMovies: state => {
        return state.search_movies;
    }
}
  
export const mutations = {
    SEARCH_MOVIES(state, data) {
        state.search_movies = data
    },

    SELECT_MOVIE(state, data){
        state.select_movie = data
    }
}


export const actions = {
    searchMovies({commit}, {text}){
        this.$axios.get(`list_movies.json?query_term=${text}&order_by=desc`)
        .then((res) => {
            console.log("🚀 ~ file: index.js ~ line 19 ~ searchMovies ~ res", res)
            commit("SEARCH_MOVIES", res.data.data.movies)
        })
       
    }
}