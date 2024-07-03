import React from 'react'
import Vol from '../assets/images/vol.jpg'

function Volunteer() {
  return (
    <>
    <div id='Volunteer' className='pt-28 md:pt-20'>
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between md:p-20 md:px-44  p-4 bg-gray-600 min-h-screen">
      <div className="w-full lg:w-1/2 ">
      <h1 className='md:text-4xl text-xl ml-5 text-white font-semibold py-2'>Volunteer</h1>
        <form className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
          <div className='flex gap-5 '>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className=" appearance-none border bg-aliceblue rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="appearance-none border bg-aliceblue rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          </div>
          <div className='flex gap-5 '>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            Subject
            </label>
            <input
              className="appearance-none border bg-aliceblue rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Email
            </label>
            <input
              className="appearance-none border bg-aliceblue rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="E-email"
            />
          </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
              Upload Resume
            </label>
            <input
              className="appearance-none border bg-aliceblue rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="resume"
              type="file"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="appearance-none border bg-aliceblue rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="comment"
              placeholder="Your comment here..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-600 hover:bg-lightgreen w-full  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full  lg:w-1/2 p-4">
        <div className="  md:flex flex-wrap justify-center items-center px-8 pt-6 pb-8 mb-4">
          <img className="  w-[250px] h-[250px] rounded-full  mb-4 " src={Vol} alt="Placeholder" />
          <div className='text-center text-white'>
            <h2 className="text-2xl font-bold mb-2">About Volunteering</h2>
            <p >Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
    
    </>
  )
}

export default Volunteer