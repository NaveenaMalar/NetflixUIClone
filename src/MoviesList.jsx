import React, { useEffect, useRef, useState } from 'react';
import './MoviesList.css';
import { Link } from 'react-router-dom';

const MoviesList = ({title,category}) => {

    const cardsRef = useRef();

    const handleWheel =(event) =>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    const [data,setData] =useState([]);
    const [error,setError] =useState(null);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGMwZTk2MmU5NGZhODRkOWUyMGQ4OTUyNWUwNmNhNCIsIm5iZiI6MTczNTUyMDQ1MS40NzUwMDAxLCJzdWIiOiI2NzcxZjBjM2NmZTYyNjQ0ZGYxMzIyYWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ePELZwi7JqnygFIXg-kXDIWJwM7Y-C-Pd5i1xzJ-Pyo'
        }
      };

    useEffect(()=>{

        cardsRef.current.addEventListener('wheel', handleWheel);
    
        const moviesAPI = async() =>{
            try{
                const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,options);
                const result = await response.json();
                if(response){
                    setData(result);
                }
                else 
                    console.log("didn't receive any data");
            }
            catch(error) {
                setError(error);
                console.log(error);
            }        
        };
        moviesAPI();
    },[]
    );

    if (error) { return <div>Error: {error.message}</div>; }

    return (        
        <div className='list1'>
            <div className='topic-title'>{title}</div>
            <div className='moviecards' ref={cardsRef}>
                {data.results? data.results.map((item,ind)=>{
                    return(
                        <div className='movie-img-name' >
                            <Link to={`/player/${item.id}`}><img key={ind} className='movieimg' src={`https://image.tmdb.org/t/p/w500/`+item.backdrop_path} alt={item.original_title} /></Link>
                            <div className='moviename'>{item.original_title}</div>
                        </div>
                    )}) : <div> Data is loading....</div>
                }                            
            </div>             
        </div>
    )
}

export default MoviesList