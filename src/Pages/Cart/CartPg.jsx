import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { FaAngleLeft } from "react-icons/fa6";
import { MdDelete, MdShoppingCart } from "react-icons/md";
import Button from "@/components/Button/Button";
const CartPg = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div className="py-12 px-7 md:px-16 flex flex-col flex-1 gap-[30px]">
      <div className="w-full">
        <button
          onClick={() => navigate(-1)}
          className="py-2 flex items-center gap-2.5"
        >
          <FaAngleLeft size={20} />
          <h3 className="text-2xl leading-[130%] font-normal">Cart</h3>
          <MdShoppingCart className="text-black/25" size={20} />
        </button>
      </div>
      {cart.map((cartData, Id) => (
        <div key={Id} className="flex flex-col md:flex-row gap-16 justify-between">
          <div className="flex max-w-[745px] w-full flex-col gap-5 items-center">
            <div className="flex justify-between items-center w-full">
              <h1 className="font-semibold text-[24px] leading-[100%] text-[#0000CD]">
                {Id + 1}. {cartData.businessType}
              </h1>
              <MdDelete className="text-[#393043]" size={20} />
            </div>
            <img
              src={cartData.homepg}
              alt="Car Dealership"
              className="w-full md:h-[396px] rounded-lg border shadow-md"
            />
            <div className="flex flex-wrap md:flex-nowrap gap-5 md:gap-0 justify-between w-full p-2.5">
              <div className="max-w-[358px] w-full flex flex-col gap-4">
                <h1 className="text-[20px] leading-[100%]">{cartData.title}</h1>
                <p className="font-semibold text-[24px] leading-[100%]">
                  ${cartData.price}
                </p>
                <p className="font-medium text-[20px] leading-[100%] truncate text-[#3A3A3AE5]">
                  {cartData.description}
                </p>
              </div>
              <div className="flex gap-5 flex-1 justify-end items-end">
                <Button
                  onClick={() => pushToCart(data)}
                  className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
                >
                  Customize
                </Button>
                <Button className="shadow-md bg-white text-[#1d4ed8] border border-[#1d4ed8] py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="border p-5 gap-2.5 flex flex-col flex-1 rounded-sm shadow-sm">
            <h1>Pricing Details</h1>
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center w-full p-5 rounded-md border border-[#00000033] shadow-sm">
              <div className="flex justify-between items-center w-full">
                <h1 className="font-semibold text-[20px] leading-[100%] text-[#0000CD]">
                  {Id + 1}. {cartData.businessType}
                </h1>
                <MdDelete className="text-[#393043]" size={18} />
                      </div>
                      <div>
                          <p>Unit Price: {cartData.price} per license</p>
                          <p>Quantity: 1</p>
                          <p>Subtotal: {cartData.price}</p>
                          <p>Nos of items purchased: 2</p>
                          <p>Payment type: Full Payment</p>
                      </div>
                      <div>
                          <h1>Additional Information</h1>
                          <p>Type of Project: {cartData.businessType}</p>
                          <p>Promotional Discount: 10%</p>
                      </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPg;
