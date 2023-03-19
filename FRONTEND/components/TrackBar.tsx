import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export interface Bar {
  id: string;
  sounds: Array<string>;
}

export interface TrackBarProps {
  bars: Bar[];
}

export default function TrackBar(props: TrackBarProps) {
  const { bars } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-[75%] overflow-auto">
        {bars.length > 0 && (
          <>
            {bars.map((bar) => {
              return (
                <div
                  key={bar.id}
                  className="flex flex-row h-[15%] m-2 bg-violet-400 rounded-xl top-1 relative"
                >
                  {bar.sounds}
                </div>
              );
            })}
          </>
        )}
      </div>
    </DndProvider>
  );
}
