import React from 'react';

const MoreOptionsIcon = () => {
  const moreOptionsLabel = 'More options';

  return (
    <svg
      aria-label={moreOptionsLabel}
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{moreOptionsLabel}</title>
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="6.5" cy="12" r="1.5" />
      <circle cx="17.5" cy="12" r="1.5" />
    </svg>
  );
};

export default MoreOptionsIcon;
