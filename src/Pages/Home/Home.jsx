import "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
// import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
const Home = () => {
  return (
    <>
      <div className=" px-4 py-6 md:px-16 flex-1">
        <Section1 />
        <hr />
        <Section2 />
        <hr />
        <Section3 />
        <hr />
        <Section4 />
        <hr />
        {/* <Section5 /> */}
        {/* <hr /> */}
        <Section6 />
        <hr />
        <Section7 />
      </div>
    </>
  );
};

export default Home;
