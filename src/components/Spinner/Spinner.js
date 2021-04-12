import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="Spinner-wrapper">
      <Loader type="ThreeDots" color="pink" height={40} width={80} />
    </div>
  );
};

export default Spinner;
