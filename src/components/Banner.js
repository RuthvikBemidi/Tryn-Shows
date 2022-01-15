import React, { useState, useEffect } from "react";
import instance from "../axios";
import requests from "../requests";
import "./Banner.css";

const base_image_url = "https://image.tmdb.org/t/p/original/";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "...": str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_image_url}${movie?.backdrop_path})`,
                backgroundPosition: "center"
            }}
        >
            <div className="banner-profile">
                <h1 className="movie-title">{movie?.title || movie?.orginal_name || movie?.name}</h1>
                <div className="movie-controls">
                    <button className="button"><b>Play</b></button>
                    <button className="button"><b>My List</b></button>
                </div>
                <h1 className="movie-overview">{ truncate(movie?.overview, 150) }</h1>
            </div>
            <div className="banner-bottomfade"></div>
        </header>
    );
}
