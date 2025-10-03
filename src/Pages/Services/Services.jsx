import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAngleRight } from "react-icons/fa6";
import Male from "../../assets/Images/Male designer drawing on a graphics tablet.svg";
import MaleII from "../../assets/Images/code editing.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const navigate = useNavigate();

  // Create refs for animated elements
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // ANIMATION 1: Heading - Slide from LEFT
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
      }
    );

    // ANIMATION 2: Subheading - Slide from RIGHT
    gsap.fromTo(
      subheadingRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
      }
    );

    // ANIMATION 3: Card 1 - Slide from LEFT + Scale
    gsap.fromTo(
      card1Ref.current,
      {
        opacity: 0,
        x: -100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: card1Ref.current,
          start: "bottom 100%",
          end: "bottom 50%",
          // scrub: 1,
        },
      }
    );

    // ANIMATION 4: Card 2 - Slide from RIGHT + Scale
    gsap.fromTo(
      card2Ref.current,
      {
        opacity: 0,
        x: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: card2Ref.current,
          start: "bottom 100%",
          end: "bottom 50%",
          // scrub: 1,
        },
      }
    );

    // ANIMATION 5: Card 3 - Slide from RIGHT + Scale
    gsap.fromTo(
      card3Ref.current,
      {
        opacity: 0,
        x: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: card3Ref.current,
          start: "bottom 100%",
          end: "bottom 50%",
          // scrub: 1,
        },
      }
    );

    // ANIMATION 6: Card 4 - Slide from LEFT + Scale
    gsap.fromTo(
      card4Ref.current,
      {
        opacity: 0,
        x: -100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: card4Ref.current,
          start: "bottom 100%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    // ANIMATION 7: Card 5 - Slide from LEFT + Scale
    gsap.fromTo(
      card5Ref.current,
      {
        opacity: 0,
        x: -100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: card5Ref.current,
          start: "bottom 100%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    // ANIMATION 8: Card 6 - Slide from RIGHT + Scale
    gsap.fromTo(
      card6Ref.current,
      {
        opacity: 0,
        x: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: card6Ref.current,
          start: "bottom 100%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    // ANIMATION 9: Button - Scale up
    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "bottom 100%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="px-4 py-6 md:px-16 flex flex-col flex-1 gap-6 md:gap-[30px]">
      <div className="flex flex-col items-center">
        <h1 ref={headingRef} className="text-[30px] font-semibold">
          Services
        </h1>
        <p
          ref={subheadingRef}
          className="text-base md:text-[24px] text-center font-medium text-[#3A3A3A]"
        >
          This is what we offer
        </p>
      </div>
      <div className="w-full flex flex-col gap-y-10">
        {/* flex 1 */}
        <div className="flex flex-col md:flex-row w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/1" state={{ id: 1, src: Male }}>
            <div
              ref={card1Ref}
              className="max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm gap-3"
            >
              <div className="flex flex-col gap-8 pl-3">
                <div className="">
                  <h1 className="font-medium text-2xl">Graphic</h1>
                  <p className="font-[300] text-lg">Design</p>
                </div>
                <p className="flex gap-1 mt-6 w-full text-[13px]">
                  <FaAngleRight className="bg-black text-white p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={Male}
                className="w-[400px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
          <Link to="/services/details/2" state={{ id: 2, src: MaleII }}>
            <div
              ref={card2Ref}
              className="max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm gap-3"
            >
              <div className="flex-1 pl-3">
                <h1 className="font-medium text-2xl text-white">Front-End</h1>
                <p className="font-[300] text-lg text-white">Development</p>
                <p className="flex gap-1 mt-6 w-full text-[13px] text-white">
                  <FaAngleRight className="bg-white text-black p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[400px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
        {/* flex 2 */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/3" state={{ id: 3, src: Male }}>
            <div
              ref={card3Ref}
              className="max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center bg-white flex-grow-0 border border-[#555555]/30 shadow-sm gap-3"
            >
              <div className="flex-1 flex flex-col items-start gap-8 pl-3">
                <div className="w-[100px]">
                  <h1 className="font-medium text-2xl">UI/Ux</h1>
                  <p className="font-[300] text-lg">Design</p>
                </div>
                <p className="flex gap-1 mt-6 w-full text-[13px]">
                  <FaAngleRight className="bg-black text-white p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={Male}
                className="w-[400px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
          <Link to="/services/details/4" state={{ id: 4, src: MaleII }}>
            <div
              ref={card4Ref}
              className="max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm gap-3"
            >
              <div className="flex-1 pl-3">
                <h1 className="font-medium text-[clamp(1.3rem,5vw,1.34rem)] leading-[1] text-white">
                  Mobile App
                </h1>
                <p className="font-[300] text-lg text-white">Development</p>
                <p className="flex gap-1 mt-6 w-full text-[13px] text-white">
                  <FaAngleRight className="bg-white text-black p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
        {/* flex 3 */}
        <div className="flex flex-col md:flex-row w-full gap-[40px] justify-center items-center flex-1">
          <Link to="/services/details/5" state={{ id: 5, src: Male }}>
            <div
              ref={card5Ref}
              className="max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-white flex-grow-0 border border-[#555555]/30 shadow-sm gap-3"
            >
              <div className="flex-1 flex flex-col items-start gap-8 pl-3">
                <div className="w-[155px]">
                  <h1 className="font-medium text-2xl">Social Media</h1>
                  <p className="font-[300] text-lg">Marketing</p>
                </div>
                <p className="flex gap-1 mt-6 w-full text-[13px]">
                  <FaAngleRight className="bg-black text-white p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={Male}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
          <Link to="/services/details/6" state={{ id: 6, src: MaleII }}>
            <div
              ref={card6Ref}
              className="max-w-[500px] w-full h-[234px] rounded-lg overflow-hidden flex items-center order-2 bg-primary flex-grow-0 border border-[#555555]/30 shadow-sm gap-3"
            >
              <div className="flex-1 pl-3">
                <div className="w-[100px]">
                  <h1 className="font-medium text-2xl text-white">AI</h1>
                  <p className="font-[300] text-lg text-white">Automation</p>
                </div>
                <p className="flex gap-1 mt-6 w-full text-[13px] text-white">
                  <FaAngleRight className="bg-white text-black p-[5px] rounded-full w-[20px] h-[20px] " />
                  Learn More
                </p>
              </div>
              <img
                src={MaleII}
                className="w-[450px] h-full"
                height="auto"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center" ref={buttonRef}>
        <Button
          className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Services;
