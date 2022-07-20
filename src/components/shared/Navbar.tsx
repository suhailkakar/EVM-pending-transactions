import Image from "next/image";
import React from "react";
import PolygonSVG from "../../assets/polygon.svg";

export default function Navbar() {
  return (
    <header className="bg-white lg:pb-0">
      <div className="px-4 mx-auto  sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src={
                  "https://www.freelogovectors.net/svg10/polygon_token_logo-freelogovectors.net_.svg"
                }
              />
            </a>
          </div>

          <div className="flex-1 flex justify-end items-center">
            <a className="px-3 ml-3 py-3 items-center justify-center flex rounded-md bg-purple-100 hover:bg-purple-200">
              <Image src={PolygonSVG} alt="" width={24} height={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
