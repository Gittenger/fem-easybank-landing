import React from "react";

import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Features from "./components/features/features.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Features />
    </>
  );
}

export default App;
