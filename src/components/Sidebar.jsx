import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2  text-white hidden lg:flex">
      {/* Awal Home & Search */}
      <div className="bg-[#121212] h-[15%] flex flex-col rounded justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      {/* Akhir Home & Search */}

      <div className="bg-[#121212] h-[85%] rounded">
        {/* Awal Your Library */}
        <div className="p-4 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack Ico" />
            <p className="font-bold">Your Library</p>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        {/* Akhir Your Library */}

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1">
          <h1>Create your own playlists</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">we'll keep you update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
