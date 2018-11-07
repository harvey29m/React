import axios from 'axios'

export const removeAction=(index)=>({
    type:'REMOVE',
    index
})

export const addAction=(index)=>({
    type:'ADD',
    index
})

const receiveMovies=(movies)=>({
    type:'RECEIVE',
    movies
})


export const getAllMovies=()=>dispatch=>{
    return axios.get('/movies.json')
    .then(res=>dispatch(receiveMovies(res.data)))
}
