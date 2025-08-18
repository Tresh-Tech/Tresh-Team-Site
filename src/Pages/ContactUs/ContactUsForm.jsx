import "react";
import Button from "@/components/Button/Button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const ContactUsForm = () => {
  return (
    <>
      <form
        action="https://formsubmit.co/treshtechcohort@gmail.com"
        method="POST"
        className="flex flex-col"
      >
        <div className="flex max-w-[800px] w-full justify-center m-auto flex-col gap-5 md:gap-[50px]">
          <div className="flex flex-col md:flex-row gap-5 md:gap-[37px]">
            <Input
              type="text"
              name="Firstname"
              placeholder="First Name"
              className="placeholder:text-[#3A3A3A] text-[#3A3A3A] h-[55px] font-normal leading-[33px] md:text-[24px]"
            />
            <Input
              type="text"
              name="Lastname"
              placeholder="Last Name"
              className="placeholder:text-[#3A3A3A] text-[#3A3A3A] h-[55px] font-normal leading-[33px] md:text-[24px]"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-[37px]">
            <Input
              type="email"
              name="Email"
              placeholder="Email"
              className="placeholder:text-[#3A3A3A] text-[#3A3A3A] h-[55px] font-normal leading-[33px] md:text-[24px]"
            />
            <Input
              type="tel"
              name="Phone Number"
              placeholder="Phone Number"
              className="placeholder:text-[#3A3A3A] text-[#3A3A3A] h-[55px] font-normal leading-[33px] md:text-[24px]"
            />
          </div>
          <div className="flex flex-col gap-[30px] py-3 min-h-[220px] h-full px-5 border border-[#D9D9D9]">
            <h1 className="text-[#3A3A3A] text-base md:text-[24px] font-normal leading-[33px]">
              Why are you contacting us?
            </h1>
            <div className="flex flex-wrap items-center gap-[34px]">
              <label
                htmlFor=""
                className="flex items-center gap-2.5 text-[16px] leading-[22px] font-normal text-[#545454]"
              >
                <Checkbox className="h-5 w-5 border-none text-black bg-[#D9D9D9]  data-[state=checked]:bg-[#D9D9D9] data-[state=checked]:text-primary" />
                Web Design
              </label>
              <label
                htmlFor=""
                className="flex items-center gap-2.5 text-[16px] leading-[22px] font-normal text-[#545454]"
              >
                <Checkbox className="h-5 w-5 border-none text-black bg-[#D9D9D9]  data-[state=checked]:bg-[#D9D9D9] data-[state=checked]:text-primary" />
                Development
              </label>
              <label
                htmlFor=""
                className="flex items-center gap-2.5 text-[16px] leading-[22px] font-normal text-[#545454]"
              >
                <Checkbox className="h-5 w-5 border-none text-black bg-[#D9D9D9]  data-[state=checked]:bg-[#D9D9D9] data-[state=checked]:text-primary" />
                Mobile Design
              </label>
              <label
                htmlFor=""
                className="flex items-center gap-2.5 text-[16px] leading-[22px] font-normal text-[#545454]"
              >
                <Checkbox className="h-5 w-5 border-none text-black bg-[#D9D9D9]  data-[state=checked]:bg-[#D9D9D9] data-[state=checked]:text-primary" />
                Others
              </label>
            </div>
          </div>
          <Textarea
            placeholder="Description"
            className="placeholder:text-[#3A3A3A] text-[#3A3A3A] min-h-[220px] font-normal leading-[33px] md:text-[24px]"
          />
          <Button
            type="submit"
            className="shadow-md bg-[#1d4ed8] text-white py-2.5 px-5 rounded-[30px]"
          >
            Send
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
