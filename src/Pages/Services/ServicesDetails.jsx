import { useLocation, useParams, useNavigate } from "react-router";
import React, { useEffect } from "react";
import { ContentData } from "./ContentData";
import { FaAngleLeft, FaArrowLeft, FaParagraph } from "react-icons/fa6";
const ServicesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const imageSrc = location.state?.src;
  const details = ContentData[id];
  useEffect(() => {
    const gwt = () => {
      console.log(ContentData[id]);
    };
    gwt();
  }, []);

  if (!details || !imageSrc) return <p>image not found</p>;
  return (
    <div className="py-12 px-16 flex flex-col items-center gap-[30px]">
      <div className="flex flex-row-reverse flex-1 border border-[#D9D9D9] h-[210px] items-center justify-between w-full rounded-lg shadow-sm">
        <img
          src={imageSrc}
          alt={details.title}
          className="w-[450px] h-full"
          height="auto"
        />
        <div className="flex flex-col-reverse ml-5">
          <h2 className="text-[40px] leading-[36px] font-semibold">
            {details.title}
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="py-2 flex items-center gap-2.5"
          >
            <FaAngleLeft size={20} />
            <h3 className="text-2xl leading-[130%] font-normal">Services</h3>
          </button>
        </div>
      </div>
      <p className="text-[#4D4D4D] mt-2 px-5 text-2xl leading-[36px] font-normal">
        {details.description.split("\n").map((paragraph, index) => (
          <p key={index} className="mt-4">
            {paragraph}
          </p>
        ))}
      </p>
    </div>
  );
};

export default ServicesDetails;
