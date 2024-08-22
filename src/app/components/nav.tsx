"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoSvg from "@/app/assets/image/logo.svg";
import twitterSvg from "@/app/assets/image/twitter.svg";
import discordSvg from "@/app/assets/image/discord.svg";
import instagramSvg from "@/app/assets/image/instagram.svg";
import explorerSvg from "@/app/assets/image/explorer.svg";
import burger from "@/app/assets/image/burger.svg";

export default function Nav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerRef = useRef<HTMLDivElement>(null); // Specify the type of drawerRef

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if drawerRef.current is not null and contains the event target
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="flex absolute top-0 items-center justify-between py-4 lg:py-8 w-full max-w-[90%] lg:max-w-[70%] border-b-2 lg:border-none">
        <Image src={logoSvg} alt="Collection Img" className="w-[150px]" />
        <div className="hidden lg:flex gap-8 ">
          <Link href="#top" className="text-white">
            Home
          </Link>
          <Link href="#top" className="text-white">
            Collection
          </Link>
          <Link href="#top" className="text-white">
            Choose
          </Link>
          <Link href="#top" className="text-white">
            About
          </Link>
          <Link href="#top" className="text-white">
            Roadmap
          </Link>
          <Link href="#top" className="text-white">
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex gap-4">
          <Image src={twitterSvg} alt="Twitter Img" className="w-[25px]" />
          <Image src={discordSvg} alt="Discord Img" className="w-[25px]" />
          <Image src={instagramSvg} alt="Instagram Img" className="w-[25px]" />
          <Image src={explorerSvg} alt="Explorer Img" className="w-[25px]" />
        </div>
        <div onClick={toggleDrawer} className="block lg:hidden cursor-pointer">
          <Image className="w-6" alt="banner" src={burger} />
        </div>
      </div>
      <div
        className={
          "fixed z-50 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out " +
          (isDrawerOpen
            ? "transition-opacity opacity-100 duration-500 z-50 translate-x-0"
            : "transition-all opacity-0 duration-500 z-50 -translate-x-full")
        }
      >
        <div
          className={
            "w-screen z-50 overflow-hidden max-w-lg left-0 absolute bg-black h-full shadow-xl duration-500 ease-in-out transform " +
            (isDrawerOpen ? "translate-x-0" : "-translate-x-full")
          }
          style={{ width: "60%" }} // Set drawer width to 50% of the screen
        >
          <article className="relative w-full max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <div className="w-[70%] mx-auto pt-4">
              <Image className="w-36" src={logoSvg} alt="logo" />
            </div>
            <div className="list-none text-white flex flex-col items-start w-[70%] m-auto gap-10 font-normal text-md">
              <Link href="#top" className="text-white">
                Home
              </Link>
              <Link href="#top" className="text-white">
                Collection
              </Link>
              <Link href="#top" className="text-white">
                Choose
              </Link>
              <Link href="#top" className="text-white">
                About
              </Link>
              <Link href="#top" className="text-white">
                Roadmap
              </Link>
              <Link href="#top" className="text-white">
                Blog
              </Link>
            </div>
            <div className="flex p-8 justify-between items-center absolute bottom-0 w-full">
              <Image src={twitterSvg} alt="Twitter Img" className="w-[25px]" />
              <Image src={discordSvg} alt="Discord Img" className="w-[25px]" />
              <Image
                src={instagramSvg}
                alt="Instagram Img"
                className="w-[25px]"
              />
              <Image
                src={explorerSvg}
                alt="Explorer Img"
                className="w-[25px]"
              />
            </div>
          </article>
        </div>
        <div
          className="w-screen h-full cursor-pointer"
          onClick={() => {
            setIsDrawerOpen(false);
          }}
        ></div>
      </div>
    </>
  );
}
