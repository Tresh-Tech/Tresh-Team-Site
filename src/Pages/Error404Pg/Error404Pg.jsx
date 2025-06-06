import React from "react";
import Error404 from "../../assets/Images/Error404.svg";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router";

const Error404Pg = () => {
  const navigate = useNavigate()
  return (
    <div className="p-2.5 flex flex-col justify-center w-full items-center flex-1 gap-[30px]">
      <img
        src={Error404}
        className="w-full max-w-[570px] h-auto"
        alt="Error 404"
      />
      <Button
        onClick={() => navigate(-1)}
        className="shadow-md bg-white text-[#1d4ed8] border border-[#1d4ed8] py-2.5 px-5 rounded-[30px]"
      >
        Back
      </Button>
    </div>
  );
};

export default Error404Pg;
