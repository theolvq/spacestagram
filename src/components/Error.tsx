import React from "react";
import PropTypes from "prop-types";

import {ErrorSnackBar} from "../styles/Error.style";
import {ErrorProps} from "../types/error";

const Error: React.FC<ErrorProps> = ({error}) => {
  const oopsMessage = `Oops, it looks like we ran into the following error: ${error}.`;
  return (
    <ErrorSnackBar error={error}>
      <p>{oopsMessage}</p>
    </ErrorSnackBar>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
