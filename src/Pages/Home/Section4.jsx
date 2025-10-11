import "react";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const navigate = useNavigate();

  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        y: -40,
        scale: 0.9,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      cardsContainerRef.current.children,
      {
        y: 60,
        scale: 0.9,
        opacity: 0,
        rotationX: 15,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "bottom 100%",
//  scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="py-12 px-2 md:py-12 md:px-6 flex flex-col gap-6 max-sm:gap-[10px]">
        <div className="flex flex-col items-center">
          <h1
            ref={headingRef}
            className=" text-[30px] md:text-[40px] leading-[130%] font-semibold"
          >
            Testimonial
          </h1>
          <p
            ref={subtitleRef}
            className="text-base md:text-[24px] leading-[33px] font-medium text-[#3A3A3A]"
          >
            What our client says about us
          </p>
        </div>
        <div
          ref={cardsContainerRef}
          className="flex flex-col md:flex-row justify-center items-center gap-[25px] max-sm:mb-[20px]"
        >
          <div className="flex flex-col flex-wrap gap-[10px] max-w-[390px] md:min-w-[200px] w-full p-5 max-sm:gap-1 bg-slate-100 md:bg-transparent rounded-lg mt-[10px] md:mt-0">
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
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5 max-sm:gap-1 md:min-w-[200px] bg-slate-100 md:bg-transparent rounded-lg">
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
          <div className="flex flex-col gap-[10px] max-w-[390px] w-full p-5 max-sm:gap-1 md:min-w-[200px] bg-slate-100 md:bg-transparent rounded-lg">
            <h1 className="text-[24px] text-center font-bold">
              Michael Rivera
            </h1>
            <p className="text-base md:text-[13px] text-center text-[#3A3A3A] font-normal">
              Founder of FitTrack
            </p>
            <p className="text-base md:text-[16px] text-center text-[#3A3A3A] font-normal">
              From concept to delivery, the professionalism and expertise of{" "}
              <strong>Tresh</strong> were unmatched. They didn&apos;t just build our
              mobile app.
            </p>
            <p className="text-base md:text-[16px] text-center font-medium">
              <a href="" className="text-primary leading-[22px] underline">
                www.tresh.com
              </a>
            </p>
          </div>
        </div>
        <div ref={buttonRef} className="flex items-center justify-center">
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
