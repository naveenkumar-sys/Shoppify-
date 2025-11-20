import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = ({ handleClick }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    // console.log(response);
    setData(response.data); //here fetching data continuously so we use effect to handle useEffect
  };
  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(data);

  return (
    <div className="flex flex-wrap items-stretch justify-center gap-5 mt-5 pb-5 ">
      {data.map((ele) => {
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
            <div className="flex justify-between p-4">
              <p className="text-lg font-semibold">${ele.price}</p>
              <button
                className="text-white bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-md text-sm px-4 py-2.5 text-center leading-5"
                onClick={() => handleClick(ele.id)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
