import React from 'react';
import OpenningModal from './openningModal';
import OpenningTable from './openningTable';
import Navbar from "../navbar"
const Openning = () => {
  return (
    <>
    <Navbar/>
      <OpenningModal />
      <OpenningTable />
    </>
  );
};

export default Openning;
