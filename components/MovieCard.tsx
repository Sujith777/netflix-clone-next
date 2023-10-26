import Image from "next/image";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import useInfoModal from "@/hooks/useInfoModal";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { push } = useRouter();
  const { openModal } = useInfoModal();
  const src: string = data?.thumbnailUrl;

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <Image
        className="w-full h-[12vw] object-cover cursor-pointer transition shadow-xl rounded-md duration delay-300 sm:group-hover:opacity-0 group-hover:opacity-80"
        loader={() => src}
        src={src}
        alt="Thumbnail"
        height={100}
        width={100}
      />
      <div className="opacity-0 absolute z-10 top-0 duration-200 transition invisible sm:visible w-full scale-0 delay-300 group-hover:scale-110 group-hover:translate-x-[2vw] group-hover:-translate-y-[6vw] group-hover:opacity-100">
        <Image
          className="w-full h-[12vw] cursor-pointer object-cover transition duration shadow-xl rounded-t-md"
          loader={() => src}
          src={src}
          alt="Thumbnail"
          width={100}
          height={100}
        />
        <div className="z-10 flex text-xs flex-col gap-1 md:gap-3 md:text-lg bg-zinc-800 w-full absolute p-2 lg:p-4 transition shadow-md rounded-b-md">
          <div className="flex items-center gap-3">
            <div
              onClick={() => {
                push(`/watch/${data?.id}`);
              }}
              className="cursor-pointer text-xl md:text-3xl w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsFillPlayFill />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <BiChevronDown className="text-white text-xl md:text-3xl group-hover:item/text-neutral-300" />
            </div>
          </div>
          <p className="text-green-400 font-semibold ">
            New <span className="text-white">2023</span>
          </p>
          <p className="text-white text-[10px] md:text-sm">{data?.duration}</p>
          <p className="text-white text-[10px] md:text-sm">{data?.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
