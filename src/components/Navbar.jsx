import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex gap-4 items-center">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Instal App
          </p>
          <p className="bg-yellow-400 text-black font-bold text-[18px] w-8 h-8 flex justify-center items-center rounded-full shadow-lg cursor-pointer">
            R
          </p>
        </div>
      </div>
      <div className="flex items-center mt-4 gap-3">
        <p className="bg-white text-black w-12 h-8 flex items-center justify-center rounded-2xl cursor-pointer font-medium">
          All
        </p>
        <p className="bg-black text-white w-20 h-8 flex items-center justify-center rounded-2xl cursor-pointer font-medium">
          Music
        </p>
        <p className="bg-black text-white w-24 h-8 flex items-center justify-center rounded-2xl cursor-pointer font-medium">
          Podcasts
        </p>
      </div>
    </>
  );
}

export default Navbar;
