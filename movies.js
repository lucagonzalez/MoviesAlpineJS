function moviesDb() {
  return {
    movies: [],
    getImgSrc(ref) {
      return `http://image.tmdb.org/t/p/original${ref}`
    },
    isOpen: ' ',
    openModal(id) {
      this.isOpen = id
    },
    pageNum: 1,
    key: "067be2305fe7df53b3509fb4181121f1",
    getMovies() {
      if (window.location.href.indexOf('github') > 0) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.pageNum}`)
          .then(response => response.json())
          .then(data => this.movies = data.results)
      } else {
        console.log("NOPE")
      }
    },
    lessPage() {
      if (this.pageNum != 1) {
        this.pageNum -= 1
        this.getMovies()
      }
    },
    morePage() {
      this.pageNum += 1
      this.getMovies()
    }
  }
}