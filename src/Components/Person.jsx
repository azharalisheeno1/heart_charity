import React from "react";
import pic from "../assets/images/aunt.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Person() {
  return (
    <>
      <div>
        <div className="md:flex pt-20 container mx-auto justify-center      ">
          <div className=" flex justify-center w-full md:w-1/2">
            <img
              src={pic}
              alt="Sample"
              className="w-full h-72 md:h-96 max-w-xs md:max-w-sm  rounded-2xl shadow-2xl shadow-black object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 p-10 rounded-lg ">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-gray-500">
                Sandy Chan
              </h1>
              <p className="text-base mb-5">Co-Founding Partner</p>
              <p className="text-base text-justify">
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito Professional charity theme based You are not allowed
                to redistribute this template ZIP file on any other template
                collection website. Please contact TemplateMo for more
                information.{" "}
              </p>
            </div>

            <div className="w-full md:w-1/3 gap-3 my-2 flex ">
              <FaFacebook size={30} className="hover:text-lightgreen" />
              <FaTwitter size={30} className="hover:text-lightgreen" />
              <FaWhatsapp size={30} className="hover:text-lightgreen" />
            </div>
          </div>
        </div>

        <div className="w-full md:pt-20 ">
          <div className="bg-aliceblue md:p-20 b px-5 py-20 md:flex md:justify-around mx-auto  h-72 items-center">
            <div>
              <h1 className="md:text-5xl text-2xl  font-bold text-gray-500">
                Make an impact. <br />
                Save lives.
              </h1>
            </div>
            <div className="flex my-2  items-center  ">
              <h1 className="text-gray-500 hover:text-cyan-500">
                Make a donation
              </h1>
              <button className="bg-gray-500 hover:bg-cyan-600 md:px-10 py-3 px-5 mx-5 rounded-full text-white">
                Become a Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Person;
