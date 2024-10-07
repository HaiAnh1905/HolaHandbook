import { useState } from "react";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  return (
    <div
      className="slider-item w-full relative "
      style={{
        maxWidth: "120rem",
        width: "100%",
        aspectRatio: "10/4",
        margin: "0 auto",
      }}
    >
        <div className="text absolute text-white z-20">
            <h1 className="text-4xl m-auto font-semibold mb-3">Chào mừng các bạn đến với Hòa Lạc</h1>
            <div className="intro m-auto text-lg w-fit">blah blah blah blah blah blah</div>
        </div>
      <div className="op absolute opacity-50 w-full h-full"></div>
      <img
        className="slider-img"
        src="https://daihoc.fpt.edu.vn/wp-content/uploads/2021/02/144409980_10164565272570062_7625633052716715320_o.jpg"
        alt=""
      />
    </div>
  );
}
