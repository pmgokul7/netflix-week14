import React, { useEffect, useState } from 'react'
import axios from "axios"
import {base,api_key} from "../../../constants"
import Youtube from "react-youtube"
import "./rowpost.css"
export const Rowpost = (props) => {
    const [poster, setPoster] = useState([])
    const [url,setUrl]=useState("")
    useEffect(() => {
      axios.get(props.link).then(res=>{
        console.log(res.data.results);
        setPoster(res.data.results)
      })
    
      return () => {
        
      }
    }, [])
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          
          autoplay: 1,
        },
      };
      const passId=(id)=>{
        axios.get(`${base}/movie/${id}/videos?api_key=${api_key}&language=en-US`).then(res=>{
            if(res.data.results.length!==0){
                setUrl(res.data.results[0])
            }else{
                console.log('array mt');
            }
            
        })
       
      }
    
  return (
    <div className='row'>
         <h2>{props.title}</h2>
        <div className="posters">
  {poster.map(p=> <img onClick={()=>passId(p.id)} className={props.isSmall? "small_poster" : "poster"} src={`${'https://image.tmdb.org/t/p/original'+p.backdrop_path}`} alt="image" />
   
  )}
        
       


        </div>
      {url &&  <Youtube videoId={url.key} opts={opts} />}
    </div>
    
  )
}
