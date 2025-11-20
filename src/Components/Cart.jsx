import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = ({ id, handleRemoveCart }) => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storing = () => {
      const filtered = products.filter((products) => id.includes(products.id));
      //    console.log(filtered);
      setCart(filtered); //filter only return array so we directly stored into cart
    };
    storing();
  }, [products, id]);

  const fetchData = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    setProduct(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(products);

  return (
    <>
      <div className="flex flex-wrap w-full items-center gap-5">
        {cart.length === 0 ? (
          <div className="w-full mx-auto text-center">
            <h1 className="text-xl font-bold"> Your cart is empty 🛒</h1>
          </div>
        ) : (
          cart.map((ele) => {
            return (
              <div
                key={ele.id}
                className="w-70  rounded-md  items-stretch h-full flex flex-col justify-between bg-violet-200 shadow-lg hover:scale-95"
              >
                <div className=" flex flex-col items-center gap-3 p-3  ">
                  <img
                    className="object-contain overflow-hidden w-50 h-40"
                    src={ele.image}
                    alt="Product-image"
                  />
                  <h2 className="font-bold line-clamp-1">{ele.title}</h2>
                  <p className="text-gray-700 line-clamp-3 text-sm  text-center w-full">
                    {ele.description}
                  </p>
                </div>
                <div className="flex justify-between p-2">
                  <p className="text-lg font-semibold">${ele.price}</p>
                  <button
                    className="text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800   font-medium rounded-md text-sm px-2 py-1.5 text-center leading-5"
                    onClick={() => {
                      handleRemoveCart(ele.id);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Cart;
