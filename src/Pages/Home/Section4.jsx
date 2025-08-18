import "react";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-6 px-2 md:py-12 md:px-6 flex flex-col gap-6 max-sm:gap-0">
        <div className="flex flex-col items-center gap-2.5 max-sm:gap-0">
          <h1 className=" text-[30px] md:text-[40px] leading-[130%] font-semibold">
            Testimonial
          </h1>
          <p className="text-base md:text-[24px] leading-[33px] font-medium text-[#3A3A3A]">
            What our client says about us
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[10px]">
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5 max-sm:gap-1">
            <h1 className="text-[24px] text-center font-bold">Priya Sharma</h1>
            <p className="text-base md:text-[13px] text-center text-[#3A3A3A] font-normal">
              CTO of CloudSphere
            </p>
            <p className="text-base md:text-[16px] text-center text-[#3A3A3A] font-normal">
              We were struggling with scaling our cloud infrastructure, but{" "}
              <strong>Tresh</strong> provided a seamless solution.{" "}
            </p>
            <p className="text-base md:text-[16px] text-center font-medium">
              <a href="" className="text-primary leading-[22px] underline">
                www.tresh.com
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5 max-sm:gap-1">
            <h1 className="text-[24px] text-center font-bold">Olamilekan</h1>
            <p className="text-base md:text-[13px] text-center text-[#3A3A3A] font-normal">
              COO of TechNova Corp
            </p>
            <p className="text-base md:text-[16px] text-center text-[#3A3A3A] font-normal">
              The team at <strong>Tresh</strong> transformed our outdated
              systems into a sleek, efficient platform. Their innovative
              approach and attention to detail made.
            </p>
            <p className="text:base md:text-[16px] text-center font-medium">
              <a href="" className="text-primary leading-[22px] underline">
                www.tresh.com
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5 max-sm:gap-1">
            <h1 className="text-[24px] text-center font-bold">
              Michael Rivera
            </h1>
            <p className="text-base md:text-[13px] text-center text-[#3A3A3A] font-normal">
              Founder of FitTrack
            </p>
            <p className="text-base md:text-[16px] text-center text-[#3A3A3A] font-normal">
              From concept to delivery, the professionalism and expertise of{" "}
              <strong>Tresh</strong> were unmatched. They didn’t just build our
              mobile app.
            </p>
            <p className="text-base md:text-[16px] text-center font-medium">
              <a href="" className="text-primary leading-[22px] underline">
                www.tresh.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]"
            onClick={() => navigate("/projects")}
          >
            View our project
          </Button>
        </div>
      </div>
    </>
  );
};

export default Section4;
