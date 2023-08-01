import React, { useEffect, useState } from "react";

const SearchResults = ({ apiKey }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [yearFilter, setYearFilter] = useState("");

  //   if you want real-time data fetching as the user enters each letter-
  //   useEffect(() => {
  //     fetch(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery.trim()}`
  //     )
  //       .then((response) => response.json())
  //       .then((moviesData) => {
  //         setSearchResults(moviesData.results);
  //         console.log(searchResults);
  //       })
  //       .catch((error) => console.log(error));
  //   }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery.trim()}&api_key=${apiKey}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredMovies = searchResults.filter(({ release_date }) => {
    if (yearFilter) {
      return new Date(release_date).getFullYear() === parseInt(yearFilter, 10);
    }
    return true;
  });

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          placeholder="enter search query"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="filter-container">
        <select
          onChange={(event) => {
            setYearFilter(event.target.value);
          }}
        >
          <option value="">None</option>
          {[...Array(124)].map((_, index) => (
            <option value={2023 - index}>{2023 - index}</option>
          ))}
        </select>
        <button onClick={() => setYearFilter("")}>delete filter</button>
      </div>
      <div className="movie-result-container">
        <ul>
          {filteredMovies &&
            filteredMovies.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      </div>
    </>
  );
};

export default SearchResults;
