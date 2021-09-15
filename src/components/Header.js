import React from "react";

import {StyledHeader} from "../styles/Header.style";

const Header = () => {
  const titleLabel = "Spacestagram";
  const homeLabel = "Home";
  return (
    <StyledHeader>
      <div className="container">
        <h1>
          <a href="/">{titleLabel}</a>
        </h1>
        <nav>
          <a href="/">
            <svg
              aria-label={homeLabel}
              height="22"
              role="img"
              viewBox="0 0 48 48"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{homeLabel}</title>
              <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" />
            </svg>
          </a>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
