import React from "react";
import PropTypes from "prop-types";

const Error = ({error}) => {
  const oopsMessage = `Oops, it looks like we ran into the following error: ${error}.`;
  return (
    <>
      <p>{oopsMessage}</p>
    </>
  );
};

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
