import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

function Bundle({ listBundles }) {
  return (
    <section className="section_bundle">
      BUNDLE SECTION
        <Swiper
          modules={[Pagination, Scrollbar, Navigation]}
          spaceBetween={1}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          className="swiper_container"
        >
          {listBundles.map((bundle) => (
            <SwiperSlide className="" key={bundle.id}>
              <div className="">
                <h3 className="">{bundle.name}</h3>
                <small className="">{bundle.description}</small>
              </div>
              <button className="btn" type="submit">
                Select
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}

export default Bundle;
