import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

function Bundle({ listBundles }) {
  return (
    <div className="container_bundle">
      <h2 className="title_bundle">SELECT A BUNDLE</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="swiper_container"
      >
        {listBundles.map((bundle) => (
          <SwiperSlide className="body_bundle" key={bundle.id}>
            <div className="bundle swiperz_slider col">
              <img
                src={bundle.fotos}
                className="bundle-img card_img"
                alt="Bundles display"
              />
              <h3 className="bundle_title">{bundle.name}</h3>
              <small className="bundle_text">{bundle.description}</small>
              <div>
                <a
                  className="btn"
                  href={bundle.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Select{" "}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Bundle;

// import React from "react";

// function Bundle({ listBundles }) {
//   return (
//     <div className="container_bundle">
//       <h2 className="title_bundle"> Bundles </h2>
//       {listBundles.map((bundle) => (
//         <div className="card_bundles" key={bundle.id}>
//           <h3> {bundle.name}</h3>
//           <img className="img_bundles" alt="Bundle img"/>
//           <div>{bundle.description}</div>
//           <button className="btn" type="submit">
//             Select
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Bundle;
