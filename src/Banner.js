import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      //   console.log(
      //     "REQUEST BANNER",
      //     request.data.results[
      //       Math.floor(Math.random() * request.data.results.length - 1)
      //     ]
      //   );
    }
    fetchData();
  }, []);

  console.log(movie);

  // ELLYPSIS FONCTION
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "top center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.originale_name}
          </h1>

          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
          </div>

          <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>

        <div className="banner--fadebottom">
          
        </div>
      </header>
    </div>
  );
}

export default Banner;
