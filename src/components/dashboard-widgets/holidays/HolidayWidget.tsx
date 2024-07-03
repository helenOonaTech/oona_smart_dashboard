import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { holidayImg } from "../../../assets";

function HolidayWidget({ onMouseDown }) {
  const demoData = [
    {
      id: "1",
      title: "Teacher's Day holiday",
      days: "3d",
      date: "18 Marc - 19 Marc",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing....",
      img: holidayImg,
    },
    {
      id: "2",
      title: "Teacher's Day holiday",
      days: "3d",
      date: "18 Marc - 19 Marc",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing....",
      img: holidayImg,
    },
    {
      id: "1",
      title: "Teacher's Day holiday",
      days: "3d",
      date: "18 Marc - 19 Marc",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing....",
      img: holidayImg,
    },
  ];
  return (
    <div className="holiday_widget rounded-lg px-5 pt-6 w-full h-full overflow-x-hidden overflow-y-hidden relative bg-white">
      <h2 className="text-[#333232] font-bold text-sm flex items-center gap-1 mb-8">
        Holidays
        <span className="text-[#A4A4A4] font-normal text-sm">
          ({demoData.length})
        </span>
      </h2>

      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        // pagination={{
        //   dynamicBullets: true,
        // }}
        pagination={{
          el: ".swiper-pagination", // Use a valid DOM element here
          // type: "bullets",
          clickable: true,
          dynamicBullets: true,
          bulletClass: "custom_pagination",
          bulletActiveClass: "custom_pagination_active",
        }}
      >
        {demoData.map((item) => (
          <SwiperSlide>
            <div className="">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-[#333232] text-[15px] font-bold flex items-center gap-1">
                    {item.title}
                    <span className="text-white bg-[#FF5F5F] rounded-full flex items-center justify-center text-[11px] font-bold w-7 h-7">
                      {item.days}
                    </span>
                  </h2>
                  <span className="text-[#FF5F5F] text-xs font-normal">
                    {item.date}
                  </span>
                  <p className="text-[#595959] font-normal text-[11px]">
                    {item.description}
                  </p>
                </div>
                <img src={item.img} alt="" />
              </div>
              <div className="flex items-center gap-2 mt-8">
                <button className="bg-[#F6F6F6] rounded-[10px] text-center py-[10px] px-8 text-[#595959] text-[11px] font-normal">
                  Details
                </button>
                <button className="bg-[#FF5F5F] rounded-[10px] text-center py-[10px] px-8 text-white text-[11px] font-normal">
                  Next
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-12 left-0 w-full pr-5 flex justify-end">
        <div className="swiper-pagination flex items-center justify-end  gap-1 !w-full px-5"></div>
      </div>
    </div>
  );
}

export default HolidayWidget;
