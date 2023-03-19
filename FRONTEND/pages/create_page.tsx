//npm libraries
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { alert } from "notie";

//Custome libraries/component
import CSSlider from "@/components/Slider";
import { musics, Music } from "../data/musicData";
import { TWButton } from "../components/CustomComponents";
import TrackBar, { Bar } from "@/components/TrackBar";

export default function CreatePage() {
  const musicData = musics;
  const [instrument, setInstrument] = useState<Music>({
    id: "",
    name: "",
    path: "",
    sounds: [],
  });

  const clickInstrument = (data: Music) => {
    setInstrument(data);
  };

  const [addBar, setAddBar] = useState<Bar[]>([{ id: uuidv4(), sounds: [] }]);

  const addBarTrack = () => {
    const newId = uuidv4();
    let soundTrack = { id: newId, sounds: [] };
    setAddBar([...addBar, soundTrack]);
    console.log(addBar);
  };

  const removeBarTrack = (arr: Array<Bar>) => {
    return arr.splice(0, arr.length);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <CSSlider musicList={musicData} onClick={clickInstrument} />
      </div>

      <div className="flex flex-col absolute justify-center mt-6 h-[50%] w-full">
        {" "}
        <div className="flex flex-col right-2 m-2 justify-center items-center w-[15%] ">
          {instrument &&
            instrument.sounds &&
            instrument.sounds.map((sound) => {
              return (
                <React.Fragment key={sound}>
                  <div className="flex justify-center p-2 m-2 cursor-pointer bg-cyan-200 border-gray-600">
                    {sound}
                  </div>
                </React.Fragment>
              );
            })}
        </div>
        <div className="flex flex-col-reverse fixed bg-black h-[60%] w-[80%] justify-end rounded-xl right-4 overflow-auto">
          <TWButton
            onClick={addBarTrack}
            text="Add Track"
            className="flex flex-row h-[15%] m-2 bg-violet-200 rounded-xl border-dashed border-4 border-violet-400 top-1 relative"
          />
          <TrackBar bars={addBar} />
        </div>
      </div>

      <div className="flex flex-row justify-between absolute w-[90%] left-13 bottom-5 translate-x-20 ">
        <div className="flex flex-row justify-between w-[40%]">
          <TWButton
            text="Save"
            textColor="white"
            className=" animation-glow-outside bg-gray-500 w-full -left-5"
          />
          <TWButton
            text="Play"
            textColor="white"
            className=" animation-glow-outside bg-gray-500 w-full mx-4"
          />
        </div>
        <TWButton
          text="Clear"
          textColor="white"
          className="animation-glow right-6"
          onClick={() => removeBarTrack(addBar)}
        />
      </div>
    </>
  );
}
