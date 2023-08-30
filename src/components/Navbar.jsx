import React from 'react';

const Navbar = () => (
  <nav>
    <div className="grid grid-flow-col grid-cols-12">
      <div className="col-start-1 cursor-pointer">Buy</div>
      <div className="col-start-2 cursor-pointer">Sell</div>
      <div className="col-start-12 cursor-pointer whitespace-nowrap justify-end">Connect Wallet</div>
    </div>
  </nav>

  // {/* <nav className="flexBetween w-full z-10 p-4 flex-row">
  //   <div className="flex flex-1 flex-row justify-start">
  //     <div className="flexCenter cursor-pointer flex-row">
  //       <p>Buy</p>
  //       <p>Rent</p>
  //     </div>
  //   </div>
  // </nav> */}

);

export default Navbar;
