import { useState } from "react";
import "./Images.css";

const Images = () => {
  const [image, setImage] = useState(4);

  const clickArrowLeft = () => {
    if (image === 1) {
      setImage(2);
    } else {
      setImage(image - 1);
    }
  };

  const clickArrowRight = () => {};

  return (
    <div className="images">
      <div className="arrow-left" onClick={clickArrowLeft}>
        &#10094;
      </div>
      <div className="slide">
        <img alt="" src={`./images/${image}.jpg`} />
      </div>
      <div className="arrow-right" onClick={clickArrowRight}>
        &#10095;
      </div>
    </div>
  );
};

export default Images;
