import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { ContentData } from "./ContentData";

gsap.registerPlugin(ScrollTrigger);

const AllProjects = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const navigate = useNavigate();

  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const projectRefs = useRef([]);

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const pushToCart = (projectData) => {
    const newCart = [...cart, projectData];
    setCart(newCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
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

    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const isEven = index % 2 === 0;

        gsap.fromTo(
          ref,
          {
            opacity: 0,
            x: isEven ? -100 : 100, 
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "bottom 50%",
              // scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ContentData.length]);

  return (
    <div className="py-12 px-7 md:px-16 flex flex-col flex-1 gap-[30px] max-sm:gap-[10px]">
      <div className="flex flex-col items-center">
        <h1 ref={headingRef} className="text-[30px] font-semibold">
          Projects
        </h1>
        <p
          ref={subheadingRef}
          className="text-base md:text-[24px] text-center font-medium text-[#3A3A3A]"
        >
          Our work speaks for itself.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        {ContentData.map((data, Id) => (
          <div
            key={Id}
            ref={(el) => (projectRefs.current[Id] = el)}
            className="max-w-[500px] w-full border-[0.5px] border-black/20 py-5 px-[30px] flex flex-col gap-5 rounded-[10px]"
          >{/*575*/}
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-xl leading-[24px] text-[#3A3A3A]">
                {data.businessType}
              </h1>
              {data.forSale ? (
                <span className="bg-[#11CD00] text-white border rounded-md text-base leading-[100%] flex items-center py-1.5 px-2">
                  For Sale
                </span>
              ) : (
                ""
              )}
            </div>
            <Link to={`/projects/details/${Id}`}>
              <div className="w-full max-w-[650px] h-[clamp(150px,50vw,280px)] relative flex items-center justify-center">
                {!imgLoaded && (
                  <div className="absolute inset-0 w-full h-full bg-black/30 backdrop-blur-lg border border-white/20 shadow-lg animate-pulse rounded-[10px] flex items-center justify-center z-0" />
                )}
                <img
                  src={data.homepg}
                  alt="Ecommerce site"
                  className={`w-full h-auto z-10 ${
                    imgLoaded ? "" : "invisible"
                  }`}
                  onLoad={() => setImgLoaded(true)}
                />
              </div>
            </Link>
            <div className="flex flex-col gap-2.5 flex-auto">
              <h1 className="font-medium text-2xl w-full">{data.title}</h1>
              <div className="flex flex-wrap lg:flex-nowrap gap-5 h-full">
                <p className="font-normal min-w-[150px] leading-[24px] text-[#3A3A3A]">
                  <div className="line-clamp-3">{data.description}</div>
                </p>
                <div>
                  {data.forSale ? (
                    <div className="flex gap-5">
                      <Button
                        onClick={() => pushToCart(data)}
                        className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
                      >
                        Cart
                      </Button>
                      <Button className="shadow-md bg-white text-[#1d4ed8] border border-[#1d4ed8] py-2.5 px-5 rounded-[30px]">
                        Demo
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-end">
                      <Button
                        className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
                        onClick={() => navigate(`/projects/details/${Id}`)}
                      >
                        View
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
