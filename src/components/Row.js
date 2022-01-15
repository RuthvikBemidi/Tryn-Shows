import movieTrailer from "movie-trailer";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import instance from "../axios";
import "./Row.css";

const base_image_url = "https://image.tmdb.org/t/p/original";

export default function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailorUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);

      setMovies(request.data.results);
      // console.log(request.data.results);
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailorUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then(url => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setTrailorUrl(urlParam.get('v'));
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`image ${isLargeRow && "large-image"}`}
            src={`${base_image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
