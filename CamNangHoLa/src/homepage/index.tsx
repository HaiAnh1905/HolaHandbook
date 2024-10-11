import { useState } from "react";
import Slider from "./slider/index.tsx";
import "./style.scss";

interface sliderArrayItem {
  index: number,
  title: String,
  sentence: String,
  img: String,
}

export default function HomePage() {
    const [sliderImg, setSliderImg] = useState<sliderArrayItem[]>([
        {   
            index: 0,
            title: "Chào mừng các bạn đến với Hòa Lạc",
            sentence: "Vũ trụ thông tin về Hòa Lạc",
            img: "https://daihoc.fpt.edu.vn/wp-content/uploads/2021/02/144409980_10164565272570062_7625633052716715320_o.jpg"
        },
        {   
            index: 1,
            title: "Những sự kiện đầy thú vị",
            sentence: "blah blah blah blah blah",
            img: "https://scontent.fhan14-5.fna.fbcdn.net/v/t39.30808-6/462215883_932128148945449_7715940863643974808_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG1yF3dYji_sl9O4aI2OOWGLxP9FEpSXCsvE_0USlJcKzmIKZd79NYv7yp6QWqgUmD6e87KcrEuwRUU3AoGmP47&_nc_ohc=trazKhT0ipQQ7kNvgG-LMHM&_nc_ht=scontent.fhan14-5.fna&_nc_gid=AMjfuo9iAuJva290gThrq74&oh=00_AYBs9LAc7XwPbv-04GX6f8UkUztBuNKP-C_0KEj3HoY9hg&oe=670BCF71"
        },
        {   
            index: 2,
            title: "Canteen trường FPT",
            sentence: "blah blah blah blah blah",
            img: "https://hoalac-school.fpt.edu.vn/wp-content/uploads/FPTSchool-0081-scaled.jpg"
        },
    ]);
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const handleNext = () => {
      if(sliderIndex === sliderImg.length - 1) {setSliderIndex(0); return}
      setSliderIndex(sliderIndex + 1);
    }
    const handlePrevious = () => {
      if(sliderIndex === 0) {setSliderIndex(sliderImg.length - 1); return}
      setSliderIndex(sliderIndex - 1);
    }
    
    // console.log(sliderImg[sliderIndex]);
  return (
    <div className="homepage">
      <div className="relative slider">
        <div className="arrow flex items-center h-full w-full justify-between absolute z-10">
          <div onClick={handlePrevious} className="left-arrow h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.3"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div onClick={handleNext} className="right-arrow h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.3"
              stroke="white"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <Slider sliderUrl = {sliderImg[sliderIndex]}/>
      </div>
    </div>
  );
}
