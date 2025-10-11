import Button from "@/components/Button/Button";
import { useEffect, useRef } from "react";
import teamMeet from "../../assets/Images/team of four people discussing team project.png";
import quote from "../../assets/Images/quote.png";
import devLang from "../../assets/Images/Frontend development and programming languages.png";
import mobileApp from "../../assets/Images/Successful mobile app startup launch.png";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const navigate = useNavigate();

  // Refs for animated elements
  const headerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valueRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (missionRef.current) {
        gsap.from(missionRef.current, {
          x: -100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (visionRef.current) {
        gsap.from(visionRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }

      if (valueRef.current) {
        gsap.from(valueRef.current, {
          x: 100,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (card1Ref.current) {
        gsap.from(card1Ref.current, {
          x: -150,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (card2Ref.current) {
        gsap.from(card2Ref.current, {
          x: 150,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (card3Ref.current) {
        gsap.from(card3Ref.current, {
          x: -150,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card3Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (card4Ref.current) {
        gsap.from(card4Ref.current, {
          x: 150,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card4Ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-12 px-7 md:px-16 flex flex-col flex-1 gap-[30px] md:gap-[50px]">
      <div
        ref={headerRef}
        className="flex flex-col items-center gap-[10px] max-sm:gap-0"
      >
        <h1 className="text-[30px] font-semibold">About us</h1>
        <p className="text-[clamp(1rem,5vw,1.5rem)] text-center md:w-[85%] font-medium text-[#3A3A3A]">
          We&apos;re a passionate collective of web developers, UI/UX designers,
          and copywriters dedicated to crafting exceptional digital experiences,
        </p>
        {/* <Button
          className="shadow-md mt-4 bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
          onClick={() => navigate("/contact-us")}
        >
          Contact Us
        </Button> */}
      </div>

      {/* <div className="flex flex-wrap justify-center items-center gap-[20px]">
        <div
          ref={missionRef}
          className="flex flex-col gap-[10px] max-w-[398px] w-full p-5 max-sm:gap-1"
        >
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Our Mission
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            To harness the power of technology to solve complex challenges,
            enhance efficiency, and create lasting value
          </p>
        </div>
        <div
          ref={visionRef}
          className="flex flex-col gap-[10px] max-w-[398px] w-full p-5 max-sm:gap-1"
        >
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Our Vision
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            To be the trusted technology partner for businesses seeking
            innovation, transformation, and scalable growth.
          </p>
        </div>
        <div
          ref={valueRef}
          className="flex flex-col gap-[10px] max-w-[398px] w-full p-5 max-sm:gap-1"
        >
          <h1 className="text-[24px] text-center font-medium leading-[130%]">
            Value
          </h1>
          <p className="text-[16px] text-center text-[#4D4D4D] font-normal leading-[26px]">
            Constantly pushing the boundaries of what&apos;s possible, Upholding
            honesty and transparency in every interaction.
          </p>
        </div>
      </div> */}

      <div className="flex flex-col gap-[30px]">
        <div
          ref={headerRef}
          className="flex flex-col items-center gap-[10px] max-sm:gap-0"
        >
          <h1 className="text-[30px] font-semibold">Development Process</h1>
          <p className="text-[clamp(1rem,5vw,1.5rem)] text-center md:w-[85%] font-medium text-[#3A3A3A]">
            Our Formula
          </p>
        </div>
        <div className="flex flex-wrap gap-[50px] justify-around items-center">
          <div
            ref={card1Ref}
            className="max-w-[500px] min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center"
          >
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                1. Client Meeting
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                We are always on the lookout for a new cutting edge technology
                to quickly deploy for our customer to take competitive advantage
                in the market.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={teamMeet} alt="Team-Meeting" className="w-full" />
            </div>
          </div>

          <div
            ref={card2Ref}
            className="max-w-[500px] min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center"
          >
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                2. Quotation
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                Software programs have become very useful these days. When
                looking for software programs to use for your business, you
                would want the best one that is within your price range.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={quote} alt="Quote" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[50px] justify-around items-center">
          <div
            ref={card3Ref}
            className="max-w-[500px] min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center"
          >
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                3. Software Development
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                Software programs have become very useful these days. When
                looking for software programs to use for your business, you
                would want the best one that is within your price range.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={devLang} alt="Dev-Language" className="w-full" />
            </div>
          </div>

          <div
            ref={card4Ref}
            className="max-w-[500px] min-h-[170px] border border-black/20 shadow-md rounded-[10px] w-full flex justify-between items-center"
          >
            <div className="flex flex-col gap-2 max-w-[200px] md:max-w-[400px] w-full py-2.5 px-5">
              <h1 className="font-medium text-[20px] leading-[24px] ">
                4. Launch
              </h1>
              <p className="text-[#3A3A3A] text-[16px] leading-[24px] ">
                Software programs have become very useful these days. When
                looking for software programs to use for your business, you
                would want the best one that is within your price range.
              </p>
            </div>
            <div className="flex justify-end items-end self-stretch width-[150px]">
              <img src={mobileApp} alt="Mobile-App" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
