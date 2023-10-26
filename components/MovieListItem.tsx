import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListItemProps {
  data: Record<string, any>[];
  title: string;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white font-semibold text-md md:text-xl lg:text-2xl mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie._id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
