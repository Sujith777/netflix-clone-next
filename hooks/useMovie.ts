import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovie = (id?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher
  );

  return { data, error, isLoading, mutate };
};

export default useMovie;
