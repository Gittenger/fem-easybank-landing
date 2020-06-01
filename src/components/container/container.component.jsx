import React from "react";

import { ContainerDiv } from "./container.styles";

const Container = ({ className, children }) => (
  <ContainerDiv className={className}>{children}</ContainerDiv>
);

export default Container;
