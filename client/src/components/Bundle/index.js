import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Card } from "react-bootstrap";

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
      >
        {listBundles.map((bundle) => (
          <SwiperSlide key={bundle.id}>
            {" "}
            <Card className="card col">
              <div className="bodyCard">
                <img
                  src={bundle.fotos}
                  className="card_img"
                  alt="Bundles display"
                />
                <div className="bundle_title">{bundle.name}</div>
                <p className="bundle_text">{bundle.description}</p>
                <button
                  className="btn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Select{" "}
                </button>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Bundle;
