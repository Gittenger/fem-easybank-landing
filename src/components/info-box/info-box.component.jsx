import React from "react";

import { InfoBoxContainer, Info } from "./info-box.styles";

const InfoBox = ({ properties }) => {
  const { heading, info, priority, alignment } = properties;

  return (
    <InfoBoxContainer alignment={alignment}>
      {priority === "h1" ? (
        <h1>{heading}</h1>
      ) : priority === "h2" ? (
        <h2> {heading}</h2>
      ) : priority === "h3" ? (
        <h3>{heading}</h3>
      ) : (
        <h4>{heading}</h4>
      )}
      <Info>{info}</Info>
    </InfoBoxContainer>
  );
};

export default InfoBox;
