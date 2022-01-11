import React from 'react';
import {ArrowButton} from '../styles/Buttons.style';
import {backToTop} from '../utils/helpers';

const Footer: React.FC = () => {
  const backToTopLabel = 'Back to Top';
  return (
    <footer>
      <ArrowButton onClick={backToTop}>
        <svg
          aria-label={backToTopLabel}
          className="arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>{backToTopLabel}</title>
          <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
        </svg>
      </ArrowButton>
    </footer>
  );
};

export default Footer;
