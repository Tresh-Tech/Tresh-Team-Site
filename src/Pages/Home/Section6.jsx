import "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section6 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 px-2 md:py-12 md:px-6 gap-6 md:gap-[30px]">
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
            At Tresh Tech, we specialize in a variety of industries, including:
            Technology: Software development, app design, and IT consulting.
            Healthcare: Health tech solutions, telemedicine applications, and
            patient management systems. E-commerce: Online retail platforms,
            payment integration, and customer engagement tools. Finance: Fintech
            solutions, financial modeling, and compliance software. Education:
            E-learning platforms, educational apps, and online course
            development. Entertainment: Media applications, gaming development,
            and content management systems. Manufacturing: IoT solutions,
            automation tools, and supply chain management systems.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            How long does a typical project take?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            The duration of a typical project at Tresh Tech can vary
            significantly based on several factors, including the complexity of
            the project, the specific industry, and the client&#39;s
            requirements. However, a general estimate is as follows: Small
            Projects: 1 to 3 months (e.g., simple app development or small-scale
            website). Medium Projects: 3 to 6 months (e.g., e-commerce platforms
            or mid-level software solutions). Large Projects: 6 months to over a
            year (e.g., comprehensive systems like healthcare management or
            large-scale enterprise solutions).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            What services does your tech team provide?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Our tech team offers a wide array of services tailored to meet the
            needs of clients across various industries. Central to our offerings
            is custom software development, which delivers bespoke solutions
            aligned with specific business goals. In web development, we create
            responsive websites and e-commerce platforms that are visually
            appealing and optimized for performance. We also specialize in
            mobile app development for both iOS and Android, emphasizing user
            experience to boost engagement. Our cloud solutions facilitate cloud
            migration and management, enhancing flexibility and cost-efficiency
            for businesses. Additionally, our UI/UX design focuses on improving
            user interaction through research and testing. We provide consulting
            services for technology strategy and process optimization, alongside
            rigorous quality assurance and testing to uphold high standards. Our
            ongoing maintenance and support services ensure that systems remain
            effective, while our expertise in data analytics transforms raw data
            into actionable insights. Finally, we offer robust cybersecurity
            solutions to protect client data and systems from threats. Overall,
            our commitment is to deliver innovative and effective technology
            solutions that empower businesses to thrive in their respective
            markets.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            Do you offer post-launch support and maintenance?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Yes, we offer comprehensive post-launch support and maintenance
            services. Our ongoing support ensures that your systems remain
            effective and up-to-date, addressing any issues that may arise after
            deployment. This includes regular monitoring, updates, and
            troubleshooting, allowing you to focus on your core business while
            we handle the technical aspects. Our goal is to ensure that your
            software and systems continue to perform optimally and adapt to your
            evolving needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-none">
          <AccordionTrigger className=" text-lg md:text-[24px] leading-[30px] font-normal text-[#3A3A3A]">
            How do you approach custom software development projects?
          </AccordionTrigger>
          <AccordionContent className=" text-base md:text-lg font-normal text-[#3A3A3A]">
            Our approach to custom software development includes: Discovery:
            Understand business needs and gather requirements. Planning: Create
            a project roadmap with timelines and milestones. Design: Develop
            wireframes and prototypes for feedback. Development: Use agile
            methods for iterative building and testing. Quality Assurance:
            Conduct thorough testing at various stages. Deployment: Launch the
            software and ensure a smooth transition. Training and Support:
            Provide user training and ongoing support. Maintenance: Offer
            updates and enhancements post-launch. We focus on collaboration and
            communication to ensure alignment with client goals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Section6;
