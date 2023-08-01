import React, { useEffect, useState } from "react";

const apiKey = "a722a33aab7c65079a00943b27af9e3a";

const SingleFetch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((moviesData) => {
        setMovies(moviesData.results);
        console.log(movies);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleFetch;
