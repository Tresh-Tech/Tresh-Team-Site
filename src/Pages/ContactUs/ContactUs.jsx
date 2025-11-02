import { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLocationDot,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import ContactUsForm from "./ContactUsForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const headerRef = useRef(null);
  const emailRef = useRef(null);
  const callRef = useRef(null);
  const socialRef = useRef(null);
  const locationRef = useRef(null);
  const formRef = useRef(null);

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

      if (emailRef.current) {
        gsap.from(emailRef.current, {
          x: -100,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: emailRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (callRef.current) {
        gsap.from(callRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: callRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (socialRef.current) {
        gsap.from(socialRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: callRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (locationRef.current) {
        gsap.from(locationRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: callRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          y: 100,
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 100%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-12 px-7 md:px-16 flex flex-col flex-1 gap-[30px] md:gap-[40px]">
      <div className="flex flex-col items-center gap-10 max-sm:gap-0 w-full mb-5">
        <div ref={headerRef} className="flex flex-col items-center mb-5">
          <h1 className="text-[30px] font-semibold">Contact</h1>
          <p className="md:text-[24px] text-center font-medium text-[#3A3A3A]">
            This is what we offer
          </p>
        </div>
        <div className="flex flex-wrap md:flex-row gap-3 justify-between md:max-w-[calc(100%-200px)] w-full max-sm:gap-1">
          <div
            ref={emailRef}
            className="flex flex-col items-center gap-1.5 m-auto max-sm:gap-0"
          >
            <h1 className=" text-[24px] max-sm:text-[20px] font-medium ">
              Email
            </h1>
            <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
              treshtechcohort@gmail.com
            </p>
          </div>
          <div
            ref={callRef}
            className="flex flex-col items-center  gap-1.5 m-auto max-sm:gap-0"
          >
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Call
            </h1>
            <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
              +2349138289542, +2348158180372
            </p>
          </div>
          <div
            ref={socialRef}
            className="flex flex-col items-center  gap-1.5 md:gap-2.5 m-auto max-sm:gap-1"
          >
            <h1 className="w-full text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Reach out on
            </h1>
            <div className="flex items-center gap-[30px] max-sm:gap-[15px]">
              <a
                href="https://www.linkedin.com/company/tresh-tech/"
                target="_blank"
              >
                <FaLinkedin
                  className="md:text-[18px] cursor-pointer text-[24px]"
                  color="#5378D0"
                />
              </a>
              <a href="https://www.instagram.com/tresh_tech/" target="_blank">
                <FaInstagram
                  className="md:text-[18px] cursor-pointer text-[24px]"
                  color="#4C8AFF"
                />
              </a>
              <a href="https://x.com/tresh_tech" target="_blank">
                <FaXTwitter
                  className="md:text-[18px] cursor-pointer text-[24px]"
                  color="#000000"
                />
              </a>
            </div>
          </div>
          <div
            ref={locationRef}
            className="flex flex-col items-center  gap-1.5 md:gap-2.5 m-auto max-sm:gap-1"
          >
            <h1 className=" text-[24px] leading-[130%] font-medium -tracking-[5%]">
              Location
            </h1>
            <div className="flex items-center gap-[10px] max-sm:gap-[5px]">
              <FaLocationDot size={18} color="#4D4D4D" />
              <p className="text-[16px] text-center leading-[26px] font-normal text-[#4D4D4D]">
                Remote
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <div ref={formRef}>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
