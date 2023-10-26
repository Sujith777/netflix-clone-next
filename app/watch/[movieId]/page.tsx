"use client";
import React from "react";
import useMovie from "@/hooks/useMovie";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const { push } = useRouter();
  const movieId = usePathname().split("/")[2];

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black/70">
        <AiOutlineArrowLeft
          onClick={() => {
            push("/");
          }}
          className="text-white hover:cursor-pointer text-2xl md:text-4xl"
        />
        <p className="text-white text-xl font-bold md:text-3xl">
          <span className="font-light ">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video autoPlay controls className="h-full w-full" src={data?.videoUrl} />
    </div>
  );
};

export default Watch;
