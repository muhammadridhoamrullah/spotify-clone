import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../contexts/PlayerContexts";

function DisplayAlbum() {
  const { id } = useParams();
  const dataAlbum = albumsData[id];
  const { playWithId } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row  ">
        <img className="w-48 rounded" src={dataAlbum.image} alt="" />
        <div className="flex flex-col justify-between">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {dataAlbum.name}
          </h2>
          <h4 className="mt-2">{dataAlbum.desc}</h4>
          <div className="flex items-center gap-2 mt-2  ">
            <img
              className="w-7 h-7"
              src={assets.spotify_logo}
              alt="Spotify Logo"
            />
            <p className="text-slate-400">Made for</p>
            <p>Muhammad Ridho Amrullah</p>
            <p className="text-slate-400">50 songs, 3 hr 19 min</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4  text-[#a7a7a7]  ">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date added</p>
        <img className="w-4 m-auto " src={assets.clock_icon} alt="Duration" />
      </div>
      <hr className="mb-2" />
      {songsData.map((el, index) => (
        <div
          onClick={() => playWithId(el.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 py-2 items-center text-[#a7a7a7] cursor-pointer hover:bg-[#ffffff2b]"
        >
          <p className="text-white ">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img
              className="w-10 inline mr-5"
              src={el.image}
              alt="Songs Photo"
            />
            {el.name}
          </p>
          <p className="text-[15px]">{dataAlbum.name}</p>
          <p className="text-[15px] hidden sm:block ">3 days ago</p>
          <p className="text-[15px] text-center">{el.duration}</p>
        </div>
      ))}
    </>
  );
}

export default DisplayAlbum;
