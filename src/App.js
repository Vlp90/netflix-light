import React from "react";
import Row from "./Row.js";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <div className="app__rows">
        {/* <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        /> */}
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
      </div>
    </div>
  );
}

export default App;
