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
            <Card className="card col">
              <Card.Body>
                <Card.Img
                  src={bundle.fotos}
                  className="card_img"
                  alt="Bundles display"
                />
                <Card.Title className="bundle_title">{bundle.name}</Card.Title>
                <Card.Text className="bundle_text">
                  {bundle.description}
                </Card.Text>
                <button
                  className="btn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Select{" "}
                </button>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Bundle;
