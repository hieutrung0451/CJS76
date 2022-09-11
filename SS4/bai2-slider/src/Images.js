import React, { useState } from "react";
import "./Images.css";

const Images = () => {
  const [image, setImage] = useState(1);

  const clickArrowLeft = () => {
    if (image === 1) {
      setImage(5);
    } else {
      setImage(image - 1);
    }
  };
  const clickArrowRight = () => {
    if (image === 5) {
      setImage(1);
    } else {
      setImage(image + 1);
    }
  };

  return (
    <div className="container-images">
      <div className="arrow-left" onClick={clickArrowLeft}>
        &#10094;
      </div>
      <div className="slide">
        <img alt=" " src={process.env.PUBLIC_URL + `/images/${image}.jpg`} />
      </div>
      <div className="arrow-right" onClick={clickArrowRight}>
        &#10095;
      </div>

      <div className="container-dots">
        {Array.from({length: 5}).map((item, index) => (
          <div className={image === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  );
};

export default Images;
