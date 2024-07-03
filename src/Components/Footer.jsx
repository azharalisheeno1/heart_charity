import React, { Children } from "react";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Footer() {
  const links = [
    { id: 1, name: "Home", path: "#Home" },
    { id: 2, name: "About", path: "#About" },
    { id: 3, name: "News", path: "#News" },
    { id: 4, name: "Causes", path: "#Causes" },
  ];

  const data = [
    {
      id: 1,
      info: "Shahrah-e-faisal Karachi Pakistan",
      Children: <CiLocationOn size={20} />,
    },
    {
      id: 2,
      info: "contact@heartcharity.org",
      Children: <MdOutlineMail size={20} />,
    },
    { id: 3, info: "(123) 456-7890", Children: <IoIosCall size={20} /> },
  ];
  return (
    <>
      <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <span className="text-lg">
              Get connected with us on social networks:
            </span>
          </div>
          <div className="flex justify-center gap-10 ">
            <MdOutlineMail size={20} />
            <CiLinkedin size={20} />
            <FaTwitter size={20} />
            <FaFacebook size={20} />
            <FaYoutube size={20} />
            <FaWhatsapp size={20} />
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-20">
            <div className="">
              <img src={Logo} className="h-28 mx-auto md:mx-0" alt="" />
            </div>

            <div>
              <h6 className="mb-4 flex justify-center text-lightgreen text-2xl font-semibold uppercase md:justify-between">
                Quick Links
              </h6>
              {links.map((link) => (
                <p key={link.id} className="mb-4">
                  <a href={link.path} className="hover:text-blue-500">
                    {link.name}
                  </a>
                </p>
              ))}
            </div>

            <div>
              <h6 className="mb-4 flex justify-center text-lightgreen text-2xl font-semibold uppercase md:justify-start">
                Contact Information
              </h6>
              {data.map((data) => (
                <p
                  key={data.id}
                  className="mb-4 flex items-center justify-center gap-3 md:justify-start"
                >
                  {data.Children}
                  {data.info}
                </p>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
