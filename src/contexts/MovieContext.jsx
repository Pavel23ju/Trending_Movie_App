import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    
    const [favourites, setFavourite] = useState([])

    useEffect(()=>{
        const storedFavs = localStorage.getItem("favourites")
        if(storedFavs) setFavourite(JSON.parse(storedFavs))
    },[])
    
    useEffect(()=>{
        localStorage.setItem('favourites',JSON.stringify(favourites))
    },[favourites])

    const addToFavourite = (movie) => {
        setFavourite(prev=>[...prev,movie])
    }

    const removeFromFavourite = (movieId) => {
        setFavourite(prev=> prev.filter(movie=>movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie=>movie.id === movieId)
    }

    const value = {
        favourites,
        addToFavourite,
        removeFromFavourite,
        isFavourite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}