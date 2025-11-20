import React from "react";
import cart from "../assets/grocery-store.png";

const Navbar = ({ count, openModal }) => {
  return (
    <div>
      <div className="bg-purple-500 w-full fixed top-0 left-0 z-50 py-5 px-5 flex justify-between items-center shadow-md ">
        <h1 className="text-3xl font-bold ">Shopify!</h1>
        <img
          className="w-10 object-contain cursor-pointer "
          src={cart}
          onClick={openModal}
          alt="cart-Icon"
        />
        <div className="bg-purple-400 w-5 h-5 text-center rounded-full absolute right-3 top-3 text-white text-sm">
          <p className="text-black">{count}</p>
        </div>
      </div>
      {/* Add spacing so page content does not go under fixed navbar */}
      <div className="h-20"></div>
    </div>
  );
};

export default Navbar;
