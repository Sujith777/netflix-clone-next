import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import ProfileWrapper from "@/components/ProfileWrapper";

async function Profiles() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <ProfileWrapper>
            <div className="group flex-row w-22 mx-auto">
              <div
                className={`w-22 h-22 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden`}
              >
                <Image
                  src="/assets/images/default-blue.png"
                  alt="Profile"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-4 text-gray-400 text-xl text-center group-hover:text-white">
                {session?.user?.name}
              </div>
            </div>
          </ProfileWrapper>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
