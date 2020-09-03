//RFCE

import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchDate();
  }, []);
  // if [], run once and not again

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Row;
