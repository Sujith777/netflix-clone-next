"use client";
import React from "react";
import MovieListItem from "@/components/MovieListItem";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

const MovieList = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <div className="flex flex-col gap-4">
      <MovieListItem title="Trending Now" data={movies} />
      <MovieListItem title="My List" data={favorites} />
    </div>
  );
};

export default MovieList;
