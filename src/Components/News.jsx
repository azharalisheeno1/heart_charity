import React from "react";
import pic from "../assets/images/news/cl.jpg";
import pic2 from "../assets/images/news/2.jpg";
import pic3 from "../assets/images/news/3.jpg";

function News() {
  return (
    <>
      <div id="News" className="container mx-auto md:px-20 pt-24 md:pt-12 px-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:p-20 ">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="bg-gray-600 rounded-3xl transform transition-transform  hover:shadow-xl">
                <img
                  src={pic}
                  alt="News"
                  className="w-full rounded-t-3xl md:h-[470px] object-cover"
                />
                <div className="ml-5 py-3">
                  <button className="mx-5 text-white hover:text-lightgreen">
                    LifeStyle
                  </button>
                  <button className="mx-5 text-white hover:text-lightgreen">
                    Clothing Donation
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-bold my-2">
                  Clothing donation to urban area
                </h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, voluptatibus possimus! Ducimus nesciunt atque
                  eveniet dolorem, fugiat sit nobis officiis dolores unde omnis?
                  Minima, dicta placeat nemo consectetur dolor et!
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search Box */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none bg-aliceblue "
              />
            </div>

            {/* Recent News */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent News</h3>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex space-x-4 transform transition-transform hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={pic2}
                      alt="Recent News"
                      className="w-36 h-28 object-cover rounded-lg"
                    />
                    <div className="flex font-bold flex-col">
                      <span className="text-gray-700">Food donation area</span>
                      <span>2 July 2024</span>
                    </div>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex space-x-4 transform transition-transform hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={pic3}
                      alt="Recent News"
                      className="w-36 h-28 object-cover rounded-lg"
                    />
                    <div className="flex flex-col font-bold">
                      <span className="text-gray-700">Volunteering Clean</span>
                      <span>2 July 2024</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg transform transition-transform hover:scale-105"
                >
                  Donation
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg transform transition-transform hover:scale-105"
                >
                  Education
                </a>
                <a
                  href="#"
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg transform transition-transform hover:scale-105"
                >
                Poverty
                </a>
              </div>
            </div>

            {/* Email Subscription */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Subscribe to our Newsletter
              </h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 my-2 border rounded-lg focus:outline-none bg-aliceblue focus:border-blue-500"
              />
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg transform transition-transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div> 


{/* start */}
        




        {/* end */}
      </div>
    </>
  );
}

export default News;
