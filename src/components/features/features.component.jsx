import React from "react";

import Container from "../container/container.component";
import InfoBox from "../info-box/info-box.component";
import FeatureBox from "../feature-box/feature-box.component";

import {
  FeaturesContainer,
  HeadingContainer,
  FeatureBoxContainer,
} from "./features.styles";

const iter = [
  {
    id: 1,
    properties: {
      heading: "Online Banking",
      info:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      priority: "h3",
      alignment: "left",
    },
    img: "online",
  },
  {
    id: 2,
    properties: {
      heading: "Simple Budgeting",
      info:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
      priority: "h3",
      alignment: "left",
    },
    img: "budget",
  },
  {
    id: 3,
    properties: {
      heading: "Fast Onboarding",
      info:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
      priority: "h3",
      alignment: "left",
    },
    img: "onboard",
  },
  {
    id: 4,
    properties: {
      heading: "Open API",
      info:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      priority: "h3",
      alignment: "left",
    },
    img: "api",
  },
];

const Features = () => (
  <FeaturesContainer>
    <Container className="content-container">
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
      <FeatureBoxContainer>
        {iter.map(({ id, img, properties }) => (
          <FeatureBox key={id} img={img} properties={properties} />
        ))}
      </FeatureBoxContainer>
    </Container>
  </FeaturesContainer>
);

export default Features;
