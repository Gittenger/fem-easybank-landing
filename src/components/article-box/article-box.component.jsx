import React from "react";

import InfoBox from "../info-box/info-box.component";

import CurrencyImg from "../../assets/image-currency.jpg";
import RestaurantImg from "../../assets/image-restaurant.jpg";
import PlaneImg from "../../assets/image-plane.jpg";
import ConfettiImg from "../../assets/image-confetti.jpg";
import { ArticleBoxContainer } from "./article-box.styles";

const ArticleBox = ({ img, author, properties }) => {
  const getImg = (img) =>
    img === "currency"
      ? CurrencyImg
      : img === "restaurant"
      ? RestaurantImg
      : img === "plane"
      ? PlaneImg
      : img === "confetti"
      ? ConfettiImg
      : ConfettiImg;

  const imgRender = getImg(img);

  return (
    <ArticleBoxContainer>
      <div className="img-box">
        <img src={imgRender} alt="" />
      </div>
      <div className="content-container">
        <div>
          <p>By {author}</p>
        </div>
        <InfoBox properties={{ ...properties }} />
      </div>
    </ArticleBoxContainer>
  );
};

export default ArticleBox;
