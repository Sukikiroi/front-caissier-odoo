import React from 'react';
import ClosingModal from './closingModal';
import ClosingTable from './closingTabel';
import Navbar from "../navbar"
const Closing = () => {
  return (
    <>
    <Navbar/>
      <ClosingModal />
      <ClosingTable />
    </>
  );
};

export default Closing;
