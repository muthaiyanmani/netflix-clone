import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Rows.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Rows(props) {

    const baseUrl="https://image.tmdb.org/t/p/original"
    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("")

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(props.fetchUrl)
            setMovies(request.data.results)
        }
        fetchData();
    },[props.fetchUrl])
    //console.log(movies)

    const opts={
        height:"360",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name|| "")
            .then((url)=>{
                 const urlParams=new URLSearchParams(new URL(url).search) 
                 setTrailerUrl(urlParams.get('v')) 
            })
        }
    }

    return (
        <div className="row">
            <div>
                <h2 className="row_name">{props.title}</h2>
                <div className="row_poster">
                    {movies.map(movie=>(
                        <img 
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`image_poster ${props.isLargeRow && "image_posterLarge"}`}
                        src={`${baseUrl}${props.isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie.name}/>
                    ))}
                </div>
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }
        </div>
    )
}

export default Rows
