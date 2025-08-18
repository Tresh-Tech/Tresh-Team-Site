import { useLocation, useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { ContentData } from "./ContentData";
import { FaAngleLeft, FaArrowLeft, FaParagraph } from "react-icons/fa6";
const ServicesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const imageSrc = location.state?.src;
  const details = ContentData[id];

  if (!details || !imageSrc) return <p>image not found</p>;
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="pt-5 flex items-center gap-1.5 md:gap-2.5 max-md:ml-2"
      >
        <FaAngleLeft size={20} />
        <h3 className="textbase md:text-2xl leading-[130%] font-normal">
          Services
        </h3>
      </button>
      <div className="py-5 px-7 md:px-16 flex flex-col items-center gap-[30px]">
        <div className="flex md:flex-row flex-col flex-1 border border-[#D9D9D9] max-md:gap-8 h-[210px] items-center justify-between w-full rounded-lg shadow-sm pt-3">
          <div className="flex flex-col ml-5 max-md:w-full max-md:m-0">
            <h2 className="text-[30px] text-center md:text-[40px] leading-[36px] font-semibold">
              {details.title}
            </h2>
          </div>
          <img
            src={imageSrc}
            alt={details.title}
            className="w-[450px] h-full"
            height="auto"
          />
        </div>
        <p className="text-[#4D4D4D] mt-2 px-1.5 md:px-5 text-lg md:text-2xl leading-[36px] font-normal">
          {details.description.split("\n").map((paragraph, index) => (
            <p key={index} className="mt-4">
              {paragraph}
            </p>
          ))}
        </p>
      </div>
    </>
  );
};

export default ServicesDetails;
