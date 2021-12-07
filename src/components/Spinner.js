import React, { Fragment } from 'react';
import spinner from '../utils/images/spinner.gif';

export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{
          width: '50%',
          margin: 'auto',
          display: 'block',
          backgroundColor: 'inherit',
        }}
      />
    </Fragment>
  );
};

export default Spinner;
