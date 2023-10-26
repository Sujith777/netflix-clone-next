"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ProfileWrapperProps {
  children: any;
}

const ProfileWrapper: React.FC<ProfileWrapperProps> = ({ children }) => {
  const { push } = useRouter();

  return <div onClick={() => push("/")}>{children}</div>;
};

export default ProfileWrapper;
