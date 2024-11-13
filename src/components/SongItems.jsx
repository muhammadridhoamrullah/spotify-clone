import React, { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContexts";

function SongItems({ songs }) {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div>
      <div
        onClick={() => playWithId(songs.id)}
        className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] "
      >
        <img className="rounded" src={songs.image} alt="Album Photo" />
        <p className="font-bold mt-2 mb-1">{songs.name}</p>
        <p className="text-slate-200 text-sm">{songs.desc}</p>
      </div>
    </div>
  );
}

export default SongItems;
