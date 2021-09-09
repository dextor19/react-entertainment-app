const requests = {
    discoverMovie: `/discover/movie?sort_by=popularity.desc`,
    netflixOriginals: `/discover/tv?with_networks=213`,
    trending: `/trending/all/week?language=en-US`,
    topRated: `/movie/top_rated?language=en-US`,
    actionMovies: `/discover/movie?with_genres=28`,
    comedyMovies: `/discover/movie?with_genres=35`,
    horrorMovies: `/discover/movie?with_genres=27`,
    romanceMovies: `/discover/movie?with_genres=10749`,
    documentaries: `/discover/movie?with_genres=99`,
}

export default requests;