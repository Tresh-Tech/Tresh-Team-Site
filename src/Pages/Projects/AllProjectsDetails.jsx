import "react";
import { useLocation, useParams, useNavigate } from "react-router";
import { FaAngleLeft } from "react-icons/fa6";
import { ContentData } from "./ContentData";
import Button from "@/components/Button/Button";
const AllProjectsDetails = () => {
  const { id } = useParams();
  const data = ContentData[id];
  //   const location = useLocation();
  const navigate = useNavigate();

  //   const imageSrc = location.state?.src;

  if (!data) return <p>image not found</p>;
  return (
    <div className="py-12 px-7 md:px-16 flex flex-col items-center gap-[30px]">
      <div className="w-full">
        <button
          onClick={() => navigate(-1)}
          className="py-2 flex items-center gap-2.5"
        >
          <FaAngleLeft size={20} />
          <h3 className="text-2xl leading-[130%] font-normal">Project</h3>
        </button>
      </div>
      <div className="flex border flex-col-reverse md:flex-row flex-grow border-[#D9D9D9] md:h-[210px] py-5 items-center justify-between w-full rounded-lg shadow-sm pl-5">
        <div className="flex flex-col max-w-[630px]">
          <div className="flex w-auto gap-2 items-center">
            <h2 className="text-[32px] leading-[36px] font-semibold">
              {data.title}
            </h2>
            <span className="text-xs bg-blue-100 px-3 py-[2px] rounded-xl">
              {data.pjType}
            </span>
          </div>
          <p className="text-[#4D4D4D] mt-5 font-normal">
            {/* {details.description.split("\n").map((paragraph, index) => (
          <p key={index} className="mt-4">
            {paragraph}
          </p>
        ))} */}
            {data.description}
          </p>
        </div>
        <img
          src={data.logo}
          alt="car"
          className="w-[350px] h-full"
          height="auto"
        />
      </div>

      <div>
        <h1 className="w-full float-start text-xl leading-[36px] font-bold text-[#4D4D4D]">
          Home
        </h1>
        <div className="w-full flex flex-col gap-[30px]">
          <img
            src={data.homepg}
            alt="Car Dealership"
            className="w-full  h-[650px] max-sm:h-auto"
          />
          <div className="flex gap-[30px] w-full justify-center">
            <Button
              className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
              //   onClick={() => navigate("/contact-us")}
            >
              Visit Website
            </Button>
            {/* <Button
              className="shadow-md bg-white text-[#1d4ed8] border border-[#1d4ed8] py-2.5 px-5 rounded-[30px]"
              //   onClick={() => navigate("/contact-us")}
            >
              View Pages
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsDetails;
