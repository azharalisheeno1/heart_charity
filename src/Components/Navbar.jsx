import React, {  useState } from "react";
import logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

  const NavList = [
    { id: 1, name: "Home", path: "#Home" },
    { id: 2, name: "About", path: "#About" },
    { id: 3, name: "Causes", path: "#Causes" },
    { id: 4, name: "Volunteer", path: "#Volunteer" },
    { id: 5, name: "News", path: "#News" },
    { id: 6, name: "Contact", path: "#Contact" },
  ];
 
  return (
    <>

      <div className="flex justify-between  bg-gray-100 shadow-2xl fixed w-full z-20     md:px-28 px-3 py-3 items-center">
        <div className="flex items-center">
          <img src={logo} className="h-20" alt="" />
          <div>
            <h1 className="md:text-2xl font-semibold text-lightgreen md:hover:text-black">
              Heart Charity Hospital
            </h1>

            <h3 className="text-sm font-semibold text-gray-500">
              Non-Profit Orgnization
            </h3>
          </div>
        </div>
        <div></div>

        <div className="md:flex hidden ">
          <ul className="flex items-center mr-6 gap-5">
            {NavList.map((Menu) => (
              <li key={Menu.id}>
             
                <a
                  className="hover:text-lightgreen text-gray-400"
                  href={Menu.path}
                >
                  {Menu.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="rounded-full border-2 border-gray-700 px-5 py-2 hover:bg-lightgreen ">
            Donate
          </button>
        </div>
        <div className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          <MdOutlineMenu size={30} />
          {isOpen && (
            <div className="flex-col md:hidden absolute top-24 left-0 w-full bg-gray-200 px-6 py-4">
              <ul className="flex flex-col gap-5">
                {NavList.map((Menu) => (
                  <li key={Menu.id}>
                    <a
                      className="hover:text-emerald-500 block py-2"
                      href={Menu.path}
                    >
                      {Menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Donate
              </button>
            </div>
          )}
        </div>
      </div>
          
    </>
  );
}

export default Navbar;
