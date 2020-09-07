//RFCE

import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
        console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // if [], run once and not again
  // if we use a variable outside de useEffect block, we have to fill the dependencie [fetchUrl]

  //   console.log(movies);

  // YouTube SETTINGS
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    // if trailer URL is open then close it
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.original_title || movie?.original_name || movie?.title || movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=R36D1IWmf9A
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
          console.log("URL PARAMS", url);
        })
        .catch((err) => console.log(err));
    }
  };



  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters ${isLargeRow && "row__postersLarge"}`}>
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.id}
            className="row__poster"
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* if we have trailer youtube video then show it, if not doesnt show youtube player  */}
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
