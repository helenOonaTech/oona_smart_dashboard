import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  birthdayIcon,
  birthday_img,
  leftArrow,
  rightArrow,
} from "../../../assets";
function BirthdayWidget({ onMouseDown }) {
  // import required modules
  const swiperRef = useRef();
  const ref1 = useRef();
  return (
    <div className="w-full birthday_widget relative h-full overflow-hidden rounded-lg">
      <img
        src={birthdayIcon}
        alt=""
        className="absolute top-0 left-0 z-50 w-full"
      />
      <Swiper
        // navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          ref1.current = swiper;
        }}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="text-center">
            <img src={birthday_img} alt="" className="w-[78px] m-auto mb-4" />
            <h2 className="text-[#333232] text-sm font-normal">
              Esther Howard
              <span className="text-[#FE4747]"> IT department</span>
            </h2>
            <span className="text-[#A4A4A4] text-xs font-normal block mb-4">
              Has Birthday Today
            </span>
            <button className="bg-[#1B84FF] text-white rounded-[13px] py-[10px] px-4 text-xs font-bold ">
              Send Wish
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="text-center">
            <img src={birthday_img} alt="" className="w-[78px] m-auto mb-4" />
            <h2 className="text-[#333232] text-sm font-normal">
              Esther Howard
              <span className="text-[#FE4747]"> IT department</span>
            </h2>
            <span className="text-[#A4A4A4] text-xs font-normal block mb-4">
              Has Birthday Today
            </span>
            <button className="bg-[#1B84FF] text-white rounded-[13px] py-[10px] px-4 text-xs font-bold ">
              Send Wish
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-between w-full px-3 absolute left-0 top-[50%] z-50">
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
            ref1.current?.slidePrev();
          }}
          onMouseDown={onMouseDown}
          className="bg-white hover:bg-[#00a9e118] transition-all w-[37px] h-[37px] 2xl:w-[43px] 2xl:h-[43px] rounded-full outline-none p-2 flex items-center justify-center naviagtion_swiper"
        >
          <img src={leftArrow} alt="" className="  2xl:w-[20px]" />
        </button>
        <button
          onClick={() => {
            swiperRef.current?.slideNext();
            ref1.current?.slideNext();
          }}
          onMouseDown={onMouseDown}
          className="bg-white hover:bg-[#00a9e118] transition-all w-[37px] h-[37px] 2xl:w-[43px] 2xl:h-[43px] rounded-full  outline-none p-2 flex items-center justify-center naviagtion_swiper"
        >
          <img src={rightArrow} alt="" className=" 2xl:w-[20px]" />
        </button>
      </div>
    </div>
  );
}

export default BirthdayWidget;
