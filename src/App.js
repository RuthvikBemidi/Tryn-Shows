import React from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
        isLargeRow
      />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRated} />
      <Row
        title="Popular Action Movies"
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies} />
      <Row
        title="Top Horror Films"
        fetchURL={requests.fetchHorrorMovies} />
      <Row
        title="Romantic Films"
        fetchURL={requests.fetchRomanticMovies} />
      <Row
        title="Best Documentry Movies"
        fetchURL={requests.fetchDocumentryMovies}
      />
    </div>
  );
}

export default App;
