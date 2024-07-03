import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  dateIcon,
  eventImg,
  eventPeople1,
  eventPeople2,
  holidayImg,
  locationIcon,
} from "../../../assets";

function Events({ onMouseDown }) {
  const demoData = [
    {
      id: "1",
      title: "Company event in Product Design",

      date: "Wed, Nov 24  . 6:00 AM",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      people: [
        eventPeople1,
        eventPeople2,
        eventPeople1,
        eventPeople2,
        eventPeople1,
        eventPeople2,
      ],
      img: eventImg,
    },
    {
      id: "2",
      title: "Company event in Product Design",

      date: "Wed, Nov 24  . 6:00 AM",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      people: [eventPeople1, eventPeople2],
      img: eventImg,
    },
    {
      id: "3",
      title: "Company event in Product Design",

      date: "Wed, Nov 24  . 6:00 AM",
      location: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      people: [eventPeople1, eventPeople2],
      img: eventImg,
    },
  ];
  return (
    <div className="events_widget rounded-lg px-5 pt-6 w-full h-full overflow-x-hidden overflow-y-hidden relative bg-white">
      <h2 className="text-[#333232] font-bold text-sm flex items-center gap-1 mb-14">
        Events
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
              <div className="flex items-center gap-6">
                <img src={item.img} alt="" />

                <div>
                  <h2 className="text-[#333232] text-[15px] font-bold flex items-center gap-1">
                    {item.title}
                  </h2>
                  <p className="text-[#A4A4A4] text-xs font-normal flex items-center gap-1 mb-2 mt-2">
                    <img src={dateIcon} alt="" />
                    {item.date}
                  </p>
                  <p className="text-[#A4A4A4] text-xs font-normal flex items-center gap-1 mb-2">
                    <img src={locationIcon} alt="" />
                    {item.location}
                  </p>
                  <div className="flex relative">
                    {item.people.length > 2 ? (
                      <div>
                        {item.people.splice(0, 2).map((person, index) => (
                          <div
                            className={`absolute `}
                            style={{
                              left: `${index * 12}px`,
                            }}
                          >
                            <img src={person} alt="" />
                          </div>
                        ))}
                        <div
                          className="text-white absolute bg-[#00A7E1] text-xs font-bold rounded-full flex items-center justify-center w-[26px] h-[26px]"
                          style={{
                            left: `${2 * 12}px`,
                          }}
                        >
                          +{item.people.length}
                        </div>
                      </div>
                    ) : (
                      <div>
                        {item.people.splice(0, 2).map((person, index) => (
                          <div
                            className={`absolute `}
                            style={{
                              left: `${index * 12}px`,
                            }}
                          >
                            <img src={person} alt="" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-20">
                <button className="bg-[#F6F6F6] rounded-[10px] text-center py-[10px] px-8 text-[#595959] text-[11px] font-normal">
                  Details
                </button>
                <button className="bg-[#04B440] rounded-[10px] text-center py-[10px] px-5 text-white text-[11px] font-normal">
                  Join Event
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

export default Events;
