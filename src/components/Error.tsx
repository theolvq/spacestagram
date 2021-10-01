import React from "react";

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

export default Error;
