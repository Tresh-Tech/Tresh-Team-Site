import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
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
      <div className="flex gap-16 justify-between">
        <div className="flex flex-col gap-[30px]">
          {cart.map((cartData, Id) => (
            <div
              key={Id}
              className="border rounded-lg shadow-lg py-5 px-[30px] flex max-w-[745px] w-full flex-col gap-5 items-center"
            >
              <div className="flex justify-between items-center w-full">
                <h1 className="font-semibold text-[24px] leading-[100%] text-[#0000CD]">
                  {Id + 1}. {cartData.businessType}
                </h1>
                <MdDelete className="text-[#393043]" size={20} />
              </div>
              <img
                src={cartData.homepg}
                alt="Car Dealership"
                className="w-full h-[396px] rounded-lg border shadow-md"
              />
              <div className="flex justify-between w-full p-2.5">
                <div className="max-w-[358px] w-full flex flex-col gap-4">
                  <h1 className="text-[20px] leading-[100%]">
                    {cartData.title}
                  </h1>
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
          ))}
        </div>
        <div className="border p-5 gap-2.5 flex flex-col flex-1 rounded-lg shadow-lg">
          <h1 className="text-[24px] font-semibold leading-[100%] text-[#3A3A3A]">Pricing Details</h1>
          {cart.map((cartDetails, Id) => (
            <div
              key={Id}
              className="flex flex-col gap-2.5 justify-between items-center w-full p-5 rounded-md border border-[#00000033] shadow-sm"
            >
              <div className="flex justify-between items-center w-full">
                <h1 className="font-semibold text-[20px] leading-[100%] text-[#0000CD]">
                  {Id + 1}. {cartDetails.businessType}
                </h1>
                <MdDelete className="text-[#393043]" size={18} />
              </div>
              <div className="w-full flex flex-col gap-2.5 justify-between">
                <p className="text-[16px] text-[#3A3A3ACC]">
                  Unit Price:{" "}
                  <span className="font-semibold text-[#3A3A3A]">
                    ${cartDetails.price} per license
                  </span>
                </p>
                <p className="text-[16px] text-[#3A3A3ACC]">
                  Quantity:{" "}
                  <span className="font-semibold text-[#3A3A3A]">1</span>
                </p>
                <p className="text-[16px] text-[#3A3A3ACC]">
                  Subtotal:{" "}
                  <span className="font-semibold text-[#3A3A3A]">
                    ${cartDetails.price}
                  </span>
                </p>
                <p className="text-[16px] text-[#3A3A3ACC]">
                  Nos of items purchased:{" "}
                  <span className="font-semibold text-[#3A3A3A]">2</span>
                </p>
                <p className="text-[16px] text-[#3A3A3ACC]">
                  Payment type:{" "}
                  <span className="font-semibold text-[#3A3A3A]">
                    Full Payment
                  </span>
                </p>
              </div>
              <div className="w-full flex flex-col gap-2.5 justify-between">
                <h1 className="font-semibold text-[20px] leading-[100%] text-[#3a3a3a]">
                  Additional Information
                </h1>
                <p className="text-[16px] text-[#3A3A3ACC]">
                  Type of Project:{" "}
                  <span className="font-semibold text-[#3A3A3A]">
                    {cartDetails.businessType}
                  </span>{" "}
                </p>
                <p className="text-[16px] text-[#3A3A3ACC]">
                  Promotional Discount:{" "}
                  <span className="font-semibold text-[#3A3A3A]">10%</span>{" "}
                </p>
              </div>
            </div>
          ))}

          <div className="flex gap-5 flex-1 justify-end items-end">
            <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
              Checkout
            </Button>
            <Button className="shadow-md bg-white flex gap-2.5 text-[#1d4ed8] border border-[#1d4ed8] py-2.5 px-5 rounded-[30px]">
              <FaPlus /> Add More
            </Button>
          </div>
          <footer>
            <h1 className="text-[16px] leading-[19px] text-[#3A3A3A80]">After payment you get your URL and the product is yours</h1>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CartPg;
