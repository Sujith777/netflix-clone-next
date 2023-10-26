"use client";
import useBillboard from "@/hooks/useBillboard";
import React, { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="h-[56.25vw] brightness-[60%] w-full object-cover"
        autoPlay
        muted
        loop
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
      />
      <div className="absolute flex flex-col gap-2 lg:gap-4 top-[50%] md:top-[30%] ml-4 md:ml-14">
        <p className="text-white text-xl h-full w-[50%] md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex items-center gap-2">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="text-white text-xs md:text-md lg:text-lg flex items-center gap-1 font-semibold bg-white/30 p-2 rounded-md hover:bg-white/20 transition"
          >
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
