import movie from '../api/movies'
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

export const getAllMovies=()=>(dispatch)=>{
    movie.getAllMovies((movies)=>{
        dispatch(receiveMovies(movies))
    })
}

