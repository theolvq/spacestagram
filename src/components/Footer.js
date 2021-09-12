import React from "react";
import PropTypes from "prop-types";

import {ArrowButton, MoreButton} from "../styles/Buttons.style";

const Footer = ({isLoading, fetchData}) => {
  const backToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const moreButtonLabel = "Load More Picutres";

  const fetchMorePictures = () => {
    console.log(window.scrollY);
    if (isLoading === false) {
      fetchData();
      window.scroll({top: window.scrollY});
    }
  };

  return (
    <footer>
      <MoreButton
        aria-label="load more pictures button"
        onClick={fetchMorePictures}
      >
        {moreButtonLabel}
      </MoreButton>
      <ArrowButton aria-label="back to top button" onClick={backToTop}>
        <svg
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
        </svg>
      </ArrowButton>
    </footer>
  );
};

Footer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default Footer;
