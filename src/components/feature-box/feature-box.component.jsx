import React from "react";

import InfoBox from "../info-box/info-box.component";

import ApiImg from "../../assets/icon-api.svg";
import BudgetImg from "../../assets/icon-budgeting.svg";
import OnboardImg from "../../assets/icon-onboarding.svg";
import OnlineImg from "../../assets/icon-onboarding.svg";
import { FeatureBoxContainer } from "./feature-box.styles";

const FeatureBox = ({ img, properties }) => {
  const getImg = (img) =>
    img === "api"
      ? ApiImg
      : img === "budget"
      ? BudgetImg
      : img === "onboard"
      ? OnboardImg
      : img === "online"
      ? OnlineImg
      : OnlineImg;

  const imgRender = getImg(img);

  return (
    <FeatureBoxContainer>
      <div>
        <img src={imgRender} alt="" />
      </div>
      <InfoBox properties={{ ...properties }} />
    </FeatureBoxContainer>
  );
};

export default FeatureBox;
