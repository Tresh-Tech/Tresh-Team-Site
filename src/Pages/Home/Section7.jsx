import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import group from "../../assets/Images/group of young people discussing work issues.svg";
import Button from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "bottom 100%",
//  scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        scale: 0.5,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)",
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
      <div className="py-6 px-2 md:py-12 md:px-6 flex flex-col gap-6 md:gap-[30px]">
        <div className="flex flex-col items-center">
          <h1
            ref={titleRef}
            className="text-[30px] text-center md:text-[40px] font-semibold"
          >
            Be part of the next big thing
          </h1>
          <p
            ref={descriptionRef}
            className="text-base md:text-[24px] font-medium text-[#3A3A3A] text-center w-[90%]"
          >
            We are a team of tech enthusiasts passionate about creating custom
            solutions to help businesses thrive in the digital age.
          </p>
        </div>
        <div className="h-full flex items-center justify-center" ref={imageRef}>
          <img src={group} className="max-w-[500px] w-full h-auto" alt="" />
        </div>
        <div className="flex items-center justify-center" ref={buttonRef}>
          <Button
            className="shadow-md border border-[##4D4D4D1A] bg-[#1d4ed8] text-white py-2.5 font-normal px-5 rounded-[30px]"
            onClick={() => navigate("/contact-us")}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Section7;
