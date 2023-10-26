"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TOP_OFFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleShowMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

  const toggleShowAccountMenu = useCallback(() => {
    setShowAccountMenu((prev) => !prev);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex items-center transition ${
          showBackground && "duration-500 bg-zinc-900/90"
        }`}
      >
        <Image
          className="lg:h-20 h-5 object-contain"
          src="/assets/images/logo.png"
          alt="logo"
          width={150}
          height={150}
        />
        <div className="flex-row ml-8 gap-8 hidden lg:flex text-sm lg:text-lg">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by language" />
        </div>
        <div
          onClick={toggleShowMobileMenu}
          className="lg:hidden flex flex-row text-sm items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-8 items-center">
          <div className="text-gray-200 hiver:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hiver:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          <div
            onClick={toggleShowAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                src="/assets/images/default-blue.png"
                alt="Profile"
                width={100}
                height={100}
              />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <AccountMenu visible={showAccountMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
