import React from "react"
import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import "./Banner.scss"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import requests from "./Request"
import axios from "axios"
 import QuickView from "./Quickview"

function Banner() {
  const [movie, setMovie] = useState([])
  const[popup , setPopup] = useState(false)
//console.log(movie);
 
const clickpopup = () => {
setPopup(!popup);

}

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, [])

  function truncateText(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }

  return (
      <>
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie.overview, 150)}
        </p>
        {movie.id && (
          <div className="banner__buttons">
          
              <button className="banner__button banner__button--play">
                <PlayArrowIcon /> Lecture
              </button>
            
            <button className="banner__button"
            onClick={clickpopup}
            >
              <HelpOutlineIcon />
              Plus d'infos
            </button>
          </div>
        )}
      </div>

    </header>
          <QuickView movie={movie}  clickpopup={clickpopup} bannerStyle={bannerStyle} popup={popup} />
</>
  )
}

export default Banner