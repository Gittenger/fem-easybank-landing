import React, { useState } from "react";

import {
  MobileMenuContainer,
  MobileNavContainer,
  MobileNav,
} from "./mobileMenu.styles.jsx";

const MobileMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <MobileMenuContainer>
      <div
        id="menu-toggle-button"
        className={menuActive ? "active" : ""}
        onClick={() => setMenuActive(!menuActive)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <MobileNavContainer className={menuActive ? "active" : ""}>
        <MobileNav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </MobileNav>
      </MobileNavContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
