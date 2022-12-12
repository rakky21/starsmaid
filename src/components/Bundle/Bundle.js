
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

export default function Bundle({ listBundles }) {
  return (
    <div className="swiperz_container">
      <h2 className="swiperz_title">Bundles</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {listBundles.map((bundle) => (
          <SwiperSlide key={bundle.id}>
            <div>
              <h2 className="bundle_title"> {bundle.name}</h2>
              <div> {bundle.description} </div>
            </div>
            <button className="btn" type="submit">
              Select
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
