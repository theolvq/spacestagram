import React from 'react';
import {ErrorSnackBar} from '../styles/Error.style';
import {ErrorProps} from '../types/error';

const Error: React.FC<ErrorProps> = ({error}) => {
  return (
    <ErrorSnackBar error={error}>
      <p>{`Oops, it looks like we ran into the following error: ${error}.`}</p>
    </ErrorSnackBar>
  );
};

export default Error;
