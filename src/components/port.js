import React, { useState } from "react";
import Slider from "react-slick";
import "./ImagePopup.css";
import herotts from "../images/herotts.png";
import abttts from "../images/abttts.png";

const projects = [
  {
    name: "Project 1",
    description: "Description for project 1",
    images: [herotts, abttts],
  },
  {
    name: "Project 2",
    description: "Description for project 2",
    images: ["/images/project3.jpg", "/images/abttts.png"],
  },
  {
    name: "Project 3",
    description: "Description for project 3",
    images: ["/images/herotts.png", "/images/project3.jpg"],
  },
];

const Port = () => {
  const [popupImages, setPopupImages] = useState(null);

  const openPopup = (images) => {
    setPopupImages(images);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupImages(null);
    document.body.style.overflow = "auto";
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="gallery-container">
      {projects.map((project, idx) => (
        <div key={idx} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project-${idx}-${i}`}
              className="thumbnail"
              onClick={() => openPopup(project.images)}
            />
          ))}
        </div>
      ))}

      {popupImages && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <Slider {...sliderSettings}>
              {popupImages.map((img, i) => (
                <img key={i} src={img} alt={`popup-${i}`} className="popup-img" />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Port;
