import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Music } from "@/data/musicData";

type CSSliderProps = {
  musicList: Music[];
  onClick: (music: Music) => void;
};

export default function CSSlider(props: CSSliderProps) {
  const { musicList, onClick } = props;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {musicList.map((instrument) => {
        return (
          <React.Fragment key={instrument.id}>
            <Image
              src={instrument.path}
              alt={instrument.name}
              height={80}
              width={80}
              className="cursor-pointer"
              onClick={() => onClick(instrument)}
            />
          </React.Fragment>
        );
      })}
    </Slider>
  );
}
