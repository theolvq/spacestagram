import React from "react";
import {Link} from "react-router-dom";

import {StyledHeader} from "../styles/Header.style";

const Header: React.FC = () => {
  const titleLabel = "Spacestagram";
  const homeLabel = "Home/Pictures in Chronological order";
  const randomLabel = "Random Pictures";

  return (
    <StyledHeader>
      <div className="container">
        <h1>
          <a href="/">{titleLabel}</a>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <svg
                  aria-label={homeLabel}
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>{homeLabel}</title>
                  <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to="/random">
                <svg
                  aria-label={randomLabel}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>{randomLabel}</title>
                  <path d="M18 9v-3c-1 0-3.308-.188-4.506 2.216l-4.218 8.461c-1.015 2.036-3.094 3.323-5.37 3.323h-3.906v-2h3.906c1.517 0 2.903-.858 3.58-2.216l4.218-8.461c1.356-2.721 3.674-3.323 6.296-3.323v-3l6 4-6 4zm-9.463 1.324l1.117-2.242c-1.235-2.479-2.899-4.082-5.748-4.082h-3.906v2h3.906c2.872 0 3.644 2.343 4.631 4.324zm15.463 8.676l-6-4v3c-3.78 0-4.019-1.238-5.556-4.322l-1.118 2.241c1.021 2.049 2.1 4.081 6.674 4.081v3l6-4z" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
