import React from "react";
import { useNavigate } from "react-router-dom";

function AlbumItems({ albums }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`album/${albums.id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] "
    >
      <img className="rounded" src={albums.image} alt="Album Photo" />
      <p className="font-bold mt-2 mb-1">{albums.name}</p>
      <p className="text-slate-200 text-sm">{albums.desc}</p>
    </div>
  );
}

export default AlbumItems;
