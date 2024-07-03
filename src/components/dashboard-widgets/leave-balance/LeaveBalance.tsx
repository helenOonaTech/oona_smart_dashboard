import React from "react";

import LeaveBox from "./LeaveBox";

type AllowedStyle = "red" | "blue" | "green";
interface LeavebalanceProps {
  style?: AllowedStyle; // Make style prop optional
  title: string;
}
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function LeaveBalance() {
  const demoData = [
    {
      id: "#3123",
      title: "Marriage Leave",
      numberB: "2",
      numberS: 5,
      valuePie: [
        { value: 50, color: "rgb(159 110 254)" },
        { value: 50, color: "rgb(224 207 255)" },
        // { value: 100, color: "#f9f9f9" },
      ],
    },
    {
      id: "#3123",
      title: "Sick Leave",
      numberB: "15",
      numberS: 30,
      valuePie: [
        { value: 50, color: "rgba(255, 94, 94, 1)" },
        { value: 50, color: "rgba(255, 215, 224, 1)" },
      ],
    },
    {
      id: "#3123",
      title: "Annual Leave",
      numberB: "12",
      numberS: 30,
      valuePie: [
        { value: 50, color: "rgb(74 218 97)" },
        { value: 50, color: "rgb(204 253 209)" },
      ],
    },
    {
      id: "#3123",
      title: "Haj Leave",
      numberB: "15",
      numberS: 30,
      valuePie: [
        { value: 50, color: "rgb(27 132 255)" },
        { value: 50, color: "rgb(200 225 255)" },
      ],
    },
    {
      id: "#3123",
      title: "Marriage Leave",
      numberB: "2",
      numberS: 5,
      valuePie: [
        { value: 50, color: "rgb(255 216 76)" },
        { value: 50, color: "rgb(255 242 195)" },
      ],
    },
    {
      id: "#3123",
      title: "Marriage Leave",
      numberB: "2",
      numberS: 5,
      valuePie: [
        { value: 50, color: "rgb(249 228 219)" },
        { value: 50, color: "rgb(255 137 93)" },
      ],
    },
  ];

  return (
    <div className="leaveBalance_widget rounded-lg px-5 pt-6 w-full h-full overflow-x-hidden overflow-y-hidden relative bg-white">
      <h2 className="text-[#333232] font-bold text-sm flex items-center gap-1 mb-8">
        Leave Balance
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
        <SwiperSlide>
          {" "}
          <div className="flex items-center w-full flex-wrap justify-between">
            {demoData.slice(0, 6).map((item: any) => {
              return (
                <div className="w-[calc(100%/3-15px)] mb-4">
                  <LeaveBox
                    title={item.title}
                    count={item.numberB}
                    total={item.numberS}
                    data={item.valuePie}
                  />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center w-full flex-wrap justify-between">
            {demoData.slice(0, 6).map((item: any) => {
              return (
                <div className="w-[calc(100%/3-15px)] mb-4">
                  <LeaveBox
                    title={item.title}
                    count={item.numberB}
                    total={item.numberS}
                    data={item.valuePie}
                  />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center w-full flex-wrap justify-between">
            {demoData.slice(0, 6).map((item: any) => {
              return (
                <div className="w-[calc(100%/3-15px)] mb-4">
                  <LeaveBox
                    title={item.title}
                    count={item.numberB}
                    total={item.numberS}
                    data={item.valuePie}
                  />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-12 left-0 w-full pr-5 flex justify-end">
        <div className="swiper-pagination flex items-center justify-end  gap-1 !w-full px-5"></div>
      </div>
    </div>
  );
}

export default LeaveBalance;
