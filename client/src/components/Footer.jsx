import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:scale-125"><a href="https://www.binance.com/en/markets/overview" target="_blank">Market</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:scale-125"><a href="https://coinmarketcap.com/rankings/exchanges/" target="_blank">Exchange</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:scale-125"><a href="https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask" target="_blank">Tutorials</a></p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:scale-125"><a href="https://metamask.io/" target="_blank">Wallets</a></p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">ashishsingh2020cse@sece.ac.in</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@HASHCASH2022</p>
      <p className="text-white text-right text-xs">.</p>
    </div>
  </div>
);

export default Footer;