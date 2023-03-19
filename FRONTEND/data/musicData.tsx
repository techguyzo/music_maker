export interface Music {
  id: string;
  name: string;
  path: string;
  sounds: Array<string>;
}

export const musics: Music[] = [
  {
    id: "1",
    name: "drum",
    path: "/drum.svg",
    sounds: ["drum1", "drum2", "drum3", "drum4", "drum5"],
  },
  {
    id: "2",
    name: "flute",
    path: "/flute.svg",
    sounds: ["flute1", "flute2", "flute3", "flute4", "flute5"],
  },
  {
    id: "3",
    name: "guitar",
    path: "/guitar.svg",
    sounds: ["guitar1", "guitar2", "guitar3", "guitar4", "guitar5"],
  },
  {
    id: "4",
    name: "gendang",
    path: "/gendang.svg",
    sounds: ["gendang1", "gendang2", "gendang3", "gendang4", "gendang5"],
  },
  {
    id: "5",
    name: "drum",
    path: "/drum.svg",
    sounds: ["drum-1", "drum-2", "drum-3", "drum-4", "drum-5"],
  },
  {
    id: "6",
    name: "flute",
    path: "/flute.svg",
    sounds: ["flute-1", "flute-2", "flute-3", "flute-4", "flute-5"],
  },
  {
    id: "7",
    name: "guitar",
    path: "/guitar.svg",
    sounds: ["guitar-1", "guitar-2", "guitar-3", "guitar-4", "guitar-5"],
  },
  {
    id: "8",
    name: "gendang",
    path: "/gendang.svg",
    sounds: ["gendang-1", "gendang-2", "gendang-3", "gendang-4", "gendang-5"],
  },
];
