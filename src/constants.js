exports.base="https://api.themoviedb.org/3"
exports.api_key="58e4b2b04bbc53fad8defcc06f6be8f8"
exports.action=`${this.base}/trending/all/week?api_key=${this.api_key}&language=en-US`
exports.horror=`${this.base}/discover/movie?api_key=${this.api_key}&with_genres=27`
exports.comedy=`${this.base}/discover/movie?api_key=${this.api_key}&with_genres=35`
exports.romance=`${this.base}/discover/movie?api_key=${this.api_key}&with_genres=10749`
exports.docs=`${this.base}/discover/movie?api_key=${this.api_key}&with_genres=99`

