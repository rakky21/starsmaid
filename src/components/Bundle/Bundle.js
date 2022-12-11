// import React from "react";

// import { SwiperSlide, Swiper } from "swiper/react";
// import { Pagination, Navigation, Scrollbar } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/pagination";

// function Bundle({ listBundles }) {
//   return (
//     <section className="section_bundle">
//       <h2>BUNDLE SECTION</h2>
//       <Swiper
//         modules={[Pagination, Scrollbar, Navigation]}
//         spaceBetween={1}
//         slidesPerView={3}
//         navigation
//         scrollbar={{ draggable: true }}
//         pagination={{ clickable: true }}
//         className="swiper_container"
//       >
//         {listBundles.map((bundle) => (
//           <SwiperSlide className="" key={bundle.id}>
//             <div className="">
//               <h3 className="">{bundle.name}</h3>
//               <small className="">{bundle.description}</small>
//             </div>
//             <button className="btn" type="submit">
//               Select
//             </button>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// export default Bundle;

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// import listBundles from "../Specials/Specials";

// import Swiper core and required modules

// install Swiper modules
// SwiperCore.use([Pagination]);

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
          <SwiperSlide>
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
