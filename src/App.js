import React from "react";

import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Features from "./components/features/features.component";
import Articles from "./components/articles/articles.component";
import Footer from "./components/footer/footer.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
