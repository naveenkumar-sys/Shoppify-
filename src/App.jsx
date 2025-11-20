import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); //for model initially it has false when ever cart button is clicked it became true
  const [count, setCount] = useState(0);
  const [id, setId] = useState([]);
  const openModal = () => {
    setIsCartOpen(true);
  };
  const closeModal = () => {
    setIsCartOpen(false);
  };
  const handleClick = (newId) => {
    // console.log(id);
    if (id.includes(newId)) {
      alert("This Item  is already added in Cart 😓🙄!");
    } else {
      setCount((count) => count + 1);
      setId((prev) => [...prev, newId]);
    }
  };

  const handleRemoveCart = (newId) => {
    setId((prev) => prev.filter((id) => id !== newId));
    setCount((count) => count - 1);
  };

  // console.log(id);

  return (
    <div className="bg-white">
      <Navbar count={count} openModal={openModal} />
      <ProductList handleClick={handleClick} />
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-4/5 max-w-lg p-5 rounded-md relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold cursor-pointer focus:ring-4 focus:outline-none focus:ring-red-300"
              onClick={closeModal}
            >
              X
            </button>
            <Cart id={id} handleRemoveCart={handleRemoveCart} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
