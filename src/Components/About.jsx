import pic from "../assets/images/2.jpg";
import React from "react";
import CountUp from "react-countup";

function About() {
  return (
    <div
      id="About"
      className="md:h-screen   flex items-center pt-10  w-full   justify-center"
    >
      <div className="w-full  h-full flex bg-aliceblue md:p-28  p-4  pt-20  flex-wrap md:flex-row">
        <div className="w-full md:w-1/2 h-1/2  md:h-full">
          <img
            src={pic}
            alt="Placeholder Image"
            className="object-cover  rounded-2xl h-72 md:h-full"
          />
        </div>

        <div className="w-full md:w-1/2  md:h-full flex py-5 flex-col justify-center items-center  ">
          <div className="w-full rounded-2xl md:w-3/4  md:h-1/2 flex flex-col   bg-white shadow-lg p-6 mb-4">
            <h2 className="md:text-4xl text-2xl text-gray-500 font-bold mb-2">
              Our Story
            </h2>
            <h3 className="md:text-xl py-2 text-lg text-lightgreen font-semibold">
              Kind Heart Charity, Non-Profit Organization.
            </h3>
            <p className="text-justify text-gray-500 ">
              Welcome to Heart Charity Hospital! This website template has been
              created using ReactJS and Tailwind CSS by Azhar Sheeno. Explore
              our site to learn more about our services, team, and how you can
              support our mission to provide quality healthcare to those in
              need.
            </p>
          </div>

          <div className="w-full rounded-2xl md:w-3/4  md:h-full flex flex-col  justify-center items-center  shadow-lg ">
            <div className="w-full h-full flex flex-col gap-3 md:flex-row">
              <div className="w-full md:w-1/2   rounded-2xl bg-white   p-4">
                <h1 className="text-lightgreen md:text-xl text-lg font-semibold">
                  Our Mission
                </h1>
                <p className="text-md text-justify ">
                  Our mission at Heart Charity Hospital is to provide
                  compassionate, high-quality healthcare to underserved
                  communities, ensuring that everyone has access to the medical
                  care they need regardless of their financial situation.
                </p>
              </div>

              <div className="w-full md:w-1/2  bg-white items-center  px-10 py-10 rounded-2xl">
                <spn className="text-6xl text-lightgreen font-semibold"> 1997 </spn>
                <p>Founded</p>
                <CountUp start={0} end={200} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <h1 className="text-6xl text-lightgreen font-semibold">
                        <span ref={countUpRef} >B </span> 
                      </h1>
                      <p>Donations</p>
                    </div>
                  )}
                </CountUp>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
