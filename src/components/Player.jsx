import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../contexts/PlayerContexts";

function Player() {
  const {
    seekBg,
    seekBar,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="bg-black h-[10%] flex justify-between items-center px-4 text-white">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 rounded-md" src={track.image} alt={track.name} />
        <div>
          <p className="font-medium">{track.name}</p>
          <p className="text-gray-500">
            {track.desc.split(" ").slice(0, 3).join(" ")}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 m-auto items-center">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle Icon"
          />
          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous Icon"
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt="Play/Pause Icon"
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt="Play/Pause Icon"
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next Icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop Icon"
          />
        </div>
        <div className="flex gap-5 items-center">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            onClick={seekSong}
            ref={seekBg}
            className="w-[60vw] max-w-[400px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-green-800 rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="Plays Icon" />
        <img className="w-4" src={assets.mic_icon} alt="Mic Icon" />
        <img className="w-4" src={assets.queue_icon} alt="Queue Icon" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker Icon" />
        <img className="w-4" src={assets.volume_icon} alt="Volume Icon" />
        <div className="w-20 h-1 bg-slate-50 rounded cursor-pointer"></div>
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt="Mini Player Icon"
        />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom Icon" />
      </div>
    </div>
  );
}

export default Player;
