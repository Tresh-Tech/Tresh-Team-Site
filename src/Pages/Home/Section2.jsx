import "react";
import ChainLink from "../../assets/Images/Group 47.svg";
import Manwithphone from "../../assets/Images/Man with phone creating ideas.png";
import SuccessfulMarketing from "../../assets/Images/Successful marketing team joins forces.png";
import TreshLogo from "../../assets/Images/Group.svg";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  // Create refs for elements you want to animate
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const logoRef = useRef(null);
  const phoneRef = useRef(null);
  const marketingRef = useRef(null);

  useEffect(() => {
    // TEMPLATE 1: Fade in from LEFT
    gsap.fromTo(
      logoRef.current,
      {
        x: -100, // Start 100px to the left
        opacity: 0,
      },
      {
        x: 0, // End at original position
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 80%",
          scrub: 1, // Animation starts when top of element hits 80% of viewport
          toggleActions: "play none none none", // play on enter
        },
      }
    );

    // TEMPLATE 2: Fade in from RIGHT
    gsap.fromTo(
      phoneRef.current,
      {
        x: 100, // Start 100px to the right
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "bottom 100%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    // TEMPLATE 3: SCALE UP with fade
    gsap.fromTo(
      marketingRef.current,
      {
        scale: 0.8, // Start at 80% size
        opacity: 0,
      },
      {
        scale: 1, // End at 100% size
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: marketingRef.current,
          start: "bottom 100%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    // TEMPLATE 4: Text animations from left
    gsap.fromTo(
      section1Ref.current.querySelectorAll("h1, p"),
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // Delay between each element
        ease: "power3.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "bottom 100%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    // TEMPLATE 5: Text animations from right
    gsap.fromTo(
      section2Ref.current.querySelectorAll("h1, p"),
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "bottom 100%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    // TEMPLATE 6: Scale and fade text
    gsap.fromTo(
      section3Ref.current.querySelectorAll("h1, p"),
      {
        scale: 0.9,
        y: 30,
        opacity: 0,
      },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "bottom 100%",
          scrub: 1,
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="py-12 px-2 md:py-12 md:px-6 max-md:flex flex-col gap-12 relative">
        {/* dotted line demacation */}
        <div className="absolute hidden md:flex justify-center left-[45%] top-[45.2%] -translate-y-1/2 -translate-x-1/2">
          <img width="100%" height="auto" src={ChainLink} alt="" />
        </div>

        {/* first section */}
        <div className="flex flex-col max-md:flex-col md:flex-row items-center gap-6 md:gap-36 justify-between">
          <div
            ref={logoRef}
            className="max-w-[400px] w-full flex justify-center"
          >
            <img
              src={TreshLogo}
              className="md:w-[350px] w-[150px]"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div
            ref={section1Ref}
            className="flex-1 flex flex-col max-md:items-center gap-3"
          >
            <h1 className="font-semibold max-md:text-center text-2xl md:text-3xl">
              Welcome to Tresh Tech
            </h1>
            <p className="text-base max-md:text-center md:text-xl text-text-fade">
              We&apos;re a passionate collective of web developers, UI/UX
              designers, and copywriters dedicated to crafting exceptional
              digital experiences,We&apos;re a passionate collective of web
              developers, UI/UX designers, and copywriters dedicated to crafting
              exceptional digital experiences.
            </p>
          </div>
        </div>

        {/* second section */}
        <div className="flex flex-col max-md:flex-col md:flex-row-reverse items-center gap-6 md:gap-36 justify-between my-[20px]">
          <div
            ref={phoneRef}
            className="max-w-[400px] w-full flex justify-center"
          >
            <img
              src={Manwithphone}
              className="md:w-[350px] w-[150px]"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div
            ref={section2Ref}
            className="flex flex-col w-[clamp(300px,100%,750px)] mb-5 max-sm:mb-0 gap-3"
          >
            <h1 className="font-semibold max-md:text-center text-2xl md:text-3xl ">
              Transforming Ideas to Reality
            </h1>
            <p className="text-base max-md:text-center md:text-xl w-[90%] text-text-fade">
              At Tresh Tech, we believe every great project starts with a spark
              of creativity. Our mission is to turn your vision into reality
              through a collaborative process.
            </p>
          </div>
        </div>

        {/* third section */}
        <div className="flex max-md:flex-col md:flex-row items-center gap-6 md:gap-36 justify-between">
          <div
            ref={marketingRef}
            className="w-full max-w-[400px] flex justify-center"
          >
            <img
              src={SuccessfulMarketing}
              className="md:w-[350px] w-[150px]"
              height="auto"
              alt="Tresh Team Having A Meeting"
            />
          </div>
          <div
            ref={section3Ref}
            className="flex-1 mb-10 max-sm:mb-0 flex flex-col gap-3"
          >
            <h1 className="font-semibold max-md:text-center text-2xl md:text-3xl">
              Your success is our priority
            </h1>
            <p className="text-base max-md:text-center md:text-xl text-text-fade">
              At Tresh Tech, your success is our priority. We believe in
              fostering innovation through collaboration and creativity. Whether
              you are a startup looking to make your mark or an established
              business aiming to enhance your digital presence, we are here to
              support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
