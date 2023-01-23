import React from "react";
import "./articl.css";

const Articl = ({ imgUrl, date, text }) => {
  return (
    <div className="gpt3__blog-container_articl">
      <div className="gpt3__blog-container_articl-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_articl-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Articl;
