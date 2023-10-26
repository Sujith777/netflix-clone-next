import useCurrentUser from "@/hooks/useCurrentUser";
import Image from "next/image";
import React from "react";
import LogOutButton from "./LogOutButton";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser();

  if (!visible) return null;

  return (
    <div className="bg-black w-56 absolute top-14 lg:top-24 lg:right-20 right-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md overflow-hidden"
            src="/assets/images/default-blue.png"
            alt="Profile"
            width={100}
            height={100}
          />
          <p className="text-white text-sm group-hover/item:underline group-hover/item:cursor-pointer">
            {data?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div className="flex justify-center items-center">
          <LogOutButton />
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
