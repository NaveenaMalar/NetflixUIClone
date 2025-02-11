import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Player.css'

const Player = () => {

  const [videodata,setVideodata] =useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGMwZTk2MmU5NGZhODRkOWUyMGQ4OTUyNWUwNmNhNCIsIm5iZiI6MTczNTUyMDQ1MS40NzUwMDAxLCJzdWIiOiI2NzcxZjBjM2NmZTYyNjQ0ZGYxMzIyYWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ePELZwi7JqnygFIXg-kXDIWJwM7Y-C-Pd5i1xzJ-Pyo'
    }
  };  

  const {id} = useParams();
  
  useEffect(()=>{

    const videosAPI =async() =>{

      try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        const result = await response.json();
        
        if(response){
          const data = result.results;
          const length = data.length;

          {data.map((item) =>{
            if(item.type === "Trailer"){
              setVideodata(item);
            }
          })
          }
        }
        else 
        console.log("didn't receive any data");
      }
      catch(error) {
        console.log(error);
      } 
    }
    videosAPI();
  },[])

  return (
    <div className='player-container'>
      <Link to ="/movies" className='back-arrow'><i class="bi bi-arrow-left-circle"></i></Link>
      <iframe src={`https://www.youtube.com/embed/${videodata.key}`}  title='trailer' className='player-video' allowFullScreen></iframe>
    </div>
  )
}

export default Player