import React, { useState } from "react";

interface TrackProps {
  // your component props here
}

export default function MusicTrack({}: /* your props here */ TrackProps) {
  const [tracks, setTracks] = useState([
    /* initial track */
  ]);

  const addTrack = () => {
    setTracks([...tracks /* new track */]);
  };

  const removeTrack = (index: number) => {
    const newTracks = [...tracks];
    newTracks.splice(index, 1);
    setTracks(newTracks);
  };

  return (
    <div>
      {
        //tracks.map((track, index) => (
        // render each track here
        //))
      }
      <button onClick={addTrack}>Add Track</button>
    </div>
  );
}
