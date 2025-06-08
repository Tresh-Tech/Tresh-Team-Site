import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eComm from "../../assets/Images/Ecommerce.svg";
import Desktop22 from "../../assets/Images/Desktop22.png";
import Car from "../../assets/Images/Car.jpg";
import Frame161 from "../../assets/Images/Frame161.png";
import Button from "@/components/Button/Button";
import { ContentData } from "./ContentData";
const AllProjects = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : []
  })

  const pushToCart = (projectData) => {
    const newCart = [...cart, projectData];
    setCart(newCart);
  }
/*
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
*/
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])
  
  
  return (
    <div className="py-12 px-7 md:px-16 flex flex-col flex-1 gap-[30px]">
      <div className="flex flex-col items-center gap-[15px] md:gap-[30px]">
        <h1 className="text-[30px] md:text-[40px] leading-[130%] font-semibold">Projects</h1>
        <p className="text-base  md:text-[24px] text-center leading-[33px] font-medium text-[#3A3A3A]">
          Our work speaks for itself.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {ContentData.map((data, Id) => (
          <div key={Id} className="max-w-[575px] w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                {data.businessType}
              </h1>
              {data.forSale ? (
                <span className="bg-[#11CD00] text-white border rounded-md text-base leading-[100%] flex items-center py-1.5 px-2">
                  For Sale
                </span>
              ) : (
                ""
              )}
            </div>
            <Link to={`/projects/details/${Id}`}>
              <img
                src={data.homepg}
                alt="Ecommerce site"
                className="w-full max-h-[275px] h-auto"
              />
            </Link>
            <div className="flex flex-col gap-2.5 flex-auto">
              <h1 className="font-medium text-2xl w-full">{data.title}</h1>
              <div className="flex flex-wrap lg:flex-nowrap gap-5 h-full">
                <p
                  
                  className="font-normal min-w-[150px] leading-[24px] text-[#3A3A3A]"
                >
                  <div className="line-clamp-3">
                    {data.description}
                  </div>
                </p>
                <div>
                  {data.forSale ? (
                    <div className="flex gap-5">
                      <Button
                        onClick={() => pushToCart(data)}
                        className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                        Cart
                      </Button>
                      <Button className="shadow-md bg-white text-[#1d4ed8] border border-[#1d4ed8] py-2.5 px-5 rounded-[30px]">
                        Demo
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-end">
                      <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                        View
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col items-center gap-[40px]">
        <div className="flex justify-between items-center w-full">
          <Link  to="/projects/details/1" state={{ id: 1, src: eComm }}>
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              E-commerce
            </h1>
            <img src={eComm} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Dashboard Management
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          </Link>
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Tourism
              </h1>
              <small className="leading-[19px] text-center py-1.5 text-white bg-[#11CD00] border border-white rounded-md px-2.5 shadow-sm">
                For sale
              </small>
            </div>
            <img
              src={Desktop22}
              alt="Ecommerce site"
              className="w-full h-auto"
            />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Dashboard Management
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
                <Button
                  //   variant="plain"
                  className="border border-[#0000CD] shadow-md bg-transparent py-2.5 px-5 rounded-[30px]"
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              Management
            </h1>
            <img src={eComm} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">Logo</h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Dealership
              </h1>
            </div>
            <img src={Car} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">Cars</h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              Website Vendor (Web And Mobile app)
            </h1>
            <img
              src={Frame161}
              alt="Ecommerce site"
              className="w-full h-auto"
            />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">Wei</h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Dealership
              </h1>
            </div>
            <img src={Car} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Car Dealership Web
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
              Home Rental (Mobile)
            </h1>
            <img
              src={Frame161}
              alt="Ecommerce site"
              className="w-full h-auto"
            />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">Bahay</h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-[575px] cursor-pointer w-full h-[500px] border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                Dealership
              </h1>
            </div>
            <img src={Car} alt="Ecommerce site" className="w-full h-auto" />
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2.5 max-w-[360px] w-full">
                <h1 className="font-medium text-2xl leading-[24px]">
                  Car Dealership Web
                </h1>
                <p className="font-normal leading-[24px] text-[#3A3A3A]">
                  A shoe store web application which simplifies user purchase
                  process
                </p>
              </div>
              <div className="flex-1 flex justify-end gap-[30px]">
                <Button className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AllProjects;
