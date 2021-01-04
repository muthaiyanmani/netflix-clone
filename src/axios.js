import axios from 'axios'

//https://api.themoviedb.org/3/movie/550?api_key=c8ec9a5bf9131c3f590ab5402b14a6d2 

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

export default instance