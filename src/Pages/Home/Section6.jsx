import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section6 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 px-2 md:py-12 md:px-6 gap-[30px]">
      <div className="flex w-full flex-col items-center">
        <h1 className=" text-[30px] text-center md:text-[40px] leading-[130%] font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion
        className="max-w-[810px] flex flex-col gap-2.5 md:gap-[30px] w-full"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            What industries do you specialize in?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque,
            fugit doloremque maiores beatae incidunt dolore voluptate sint esse
            sunt explicabo nesciunt veritatis ad officia dignissimos quia
            praesentium molestias dolorum.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            How long does a typical project take?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis soluta vero quos. Provident odio consequatur sequi
            deserunt fugiat mollitia, itaque magni dolore qui accusamus
            blanditiis ipsa quidem incidunt aliquid ducimus.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            What services does your tech team provide?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cum
            praesentium tempore. Sunt dicta recusandae doloribus magnam quas
            repellat temporibus possimus vel quod magni, suscipit nulla
            praesentium itaque porro molestiae.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            Do you offer post-launch support and maintenance?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            fugiat ducimus impedit, tempora aliquid alias quasi incidunt,
            eligendi perspiciatis ad nihil unde officia fugit laborum! Ad rem
            dignissimos impedit necessitatibus?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            How do you approach custom software development projects?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            explicabo dolorum repudiandae voluptatibus nemo animi inventore sit
            nam perferendis error recusandae, perspiciatis laboriosam delectus
            dolore distinctio adipisci laborum. Nesciunt, laboriosam.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Section6;
