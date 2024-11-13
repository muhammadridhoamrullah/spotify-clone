import React from "react";
import Navbar from "./Navbar";
import AlbumItems from "./AlbumItems";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import SongItems from "./SongItems";

function DisplayHome() {
  return (
    <>
      <Navbar />
      {/* Awal Featured Charts */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto scroll-smooth scrollbar-hide">
          {albumsData.map((el, index) => (
            <AlbumItems key={index} albums={el} />
          ))}
        </div>
      </div>
      {/* Akhir Featured Charts */}

      {/* Awal Today's Biggest Hits */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="flex overflow-auto scroll-smooth scrollbar-hide">
          {songsData.map((el, index) => (
            <SongItems key={index} songs={el} />
          ))}
        </div>
      </div>
      {/* Akhir Today's Biggest Hits */}
    </>
  );
}

export default DisplayHome;
