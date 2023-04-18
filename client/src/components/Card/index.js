import React from "react";

function Card({ listCards }) {
  return (
    <div className="container_bundle">
      <h2 className="title_bundle">SELECT A BUNDLE</h2>
      <div className="TESTCONT">
        {listCards.map((bundle) => (
          <div className="card col" key={bundle.id}>
            <div className="bodyCard">
              <img
                src={bundle.fotos}
                className="card_img"
                alt="Bundles display"
              />
              <div className="bundle_title">{bundle.name}</div>
              <p className="bundle_text">{bundle.description}</p>
              <button className="btn" target="_blank" rel="noreferrer noopener">
                {" "}
                Select{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
