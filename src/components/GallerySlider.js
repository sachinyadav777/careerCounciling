import React, { useState } from "react";
import gallary1 from "../assets/images/gallery-page-1.jpg";
import gallary2 from "../assets/images/gallery-page-2.jpg";
import gallary3 from "../assets/images/gallery-page-3.jpg";
import gallary4 from "../assets/images/gallery-page-4.jpg";
import gallary5 from "../assets/images/gallery-page-5.jpg";
import gallary6 from "../assets/images/gallery-page-6.jpg";
import gallary7 from "../assets/images/gallery-page-7.jpg";
import gallary8 from "../assets/images/gallery-page-8.jpg";
import gallary9 from "../assets/images/gallery-page-9.jpg";

const GallerySlider = () => {
  const [indexB, setIndexB] = useState(0);
  const allImg = [
    gallary1,
    gallary2,
    gallary3,
    gallary4,
    gallary5,
    gallary6,
    gallary7,
    gallary8,
    gallary9,
  ];

  return (
    <div>
      <button
        onClick={() => {
          if (indexB == 0) {
            setIndexB(allImg.length - 1);
          } else {
            setIndexB(indexB - 1);
          }
        }}
      >
        Pre
      </button>
      {allImg.map((imge, i) => {
        return (
          <div className={`parentImg ${indexB == i ? "" : "me"}`} key={i}>
            <img src={imge} alt="Img hai" />
          </div>
        );
      })}
      <button
        onClick={() => {
          if (indexB === allImg.length - 1) {
            setIndexB(0);
          } else {
            setIndexB(indexB + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};

export default GallerySlider;
