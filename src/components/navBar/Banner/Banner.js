import React, { useEffect,useState } from 'react'
import axios from 'axios';
import "./banner.css"




export const Banner = () => {
    var [movie, setMovie] = useState("")

    useEffect(() => {
        var i = Math.floor(Math.random() * 20);
       axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=58e4b2b04bbc53fad8defcc06f6be8f8&language=en-US').then(res=>{
        setMovie(res.data.results[i])
        
       })
        return () => {
          
        }
      }, [])
  return (
    <div className='banner' style={{backgroundImage:movie ?`url(${"https://image.tmdb.org/t/p/original"+movie.backdrop_path})`:""}}>
       <div className='content'>
          <h1 className='title'>{movie ? movie.original_title:""}</h1>
          <div className="banner_buttons">
            <button className="button">play</button>
            <button className="button">play</button>

          </div>
          <div className="description">
          {movie ? movie.overview : ""}
          </div>
        
       </div> 
        <div className="fade_bottom">

          </div>
    </div>
  )
}
