import _movies from './movies.json'
const TIMEOUT=100
export default { getAllMovies:(cb,timeout)=>setTimeout(()=>cb(_movies),timeout || TIMEOUT)}