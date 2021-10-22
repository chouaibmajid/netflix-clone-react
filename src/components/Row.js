import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.scss"

function Row({ title, url , posted }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
    //   console.log( request.data.results)
      setMovies(
          
        request.data.results
      );
    }
    fetchData();

  }, []);

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__images">
        {movies.map(mv => (
          <div key={mv.id} >
              
           {  posted ? 
            <img
            src={`https://image.tmdb.org/t/p/original/${mv.backdrop_path}`}
            className="image"
          /> 
          :
              
              <img
              src={`https://image.tmdb.org/t/p/original/${mv.backdrop_path}`}
              className="image"
            /> }
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Row;
