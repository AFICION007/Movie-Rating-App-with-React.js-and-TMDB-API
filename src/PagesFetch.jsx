import React, { useEffect, useState } from "react";

const PagesFetch = ({ apiKey }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
        );
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
      }
    };

    const fetchAllMovies = async () => {
      let allMovies = [];
      let currentPage = 1;
      let totalPages = 5;

      while (currentPage <= totalPages) {
        const moviesData = await fetchMovies(currentPage);
        if (moviesData.length === 0) break; // Empty response, no more results
        allMovies = allMovies.concat(moviesData);
        currentPage++;
      }

      setMovies(allMovies);
    };

    fetchAllMovies();
  }, []);

  return (
    <div>
      <h1>Popular TV Shows</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PagesFetch;
