import React from "react";

import InfoBox from "../info-box/info-box.component";

import { FeaturesContainer, HeadingContainer } from "./features.styles";

const Features = () => (
  <FeaturesContainer>
    <HeadingContainer>
      <InfoBox
        properties={{
          heading: "Why choose Easybank?",
          info:
            "We leverage open banking to turn your bank account into your financial hub. Control your finances like never before.",
          priority: "h2",
          alignment: "left",
        }}
      />
    </HeadingContainer>
  </FeaturesContainer>
);

export default Features;
