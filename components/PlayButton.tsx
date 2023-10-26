import { useRouter } from "next/navigation";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const { push } = useRouter();

  return (
    <button
      onClick={() => push(`/watch/${movieId}`)}
      className="bg-white rounded-md py-1 lg:py-2 px-4 w-auto text-md lg:text-lg font-semibold flex items-center transition hover:bg-neutral-300"
    >
      <BsFillPlayFill size={20} />
      Play
    </button>
  );
};

export default PlayButton;
