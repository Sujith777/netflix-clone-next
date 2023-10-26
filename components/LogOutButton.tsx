"use client";
import React from "react";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const { push } = useRouter();

  return (
    <button
      onClick={() => {
        signOut({ redirect: false, callbackUrl: "/auth" });
        push("/auth");
      }}
      className="bg-red-600 text-white hover:bg-red-400 p-2 rounded-md font-semibold"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
