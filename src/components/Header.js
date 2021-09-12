import React from "react";

import {StyledHeader} from "../styles/Header.style";

const Header = () => {
  const titleLabel = "Spacestagram";
  return (
    <StyledHeader>
      <h1>
        <a href="/">{titleLabel}</a>
      </h1>
    </StyledHeader>
  );
};

export default Header;
