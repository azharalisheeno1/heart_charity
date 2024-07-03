import React from 'react'
import user from '../assets/images/avatar/Profile.png'
function Contact() {
  return (
    <>
    
    <div id='Contact' className="container mx-auto md:p-6  bg-aliceblue-300 rounded-lg ">
      
      <div className="grid grid-cols-1 md:grid-cols-2 pt-16 md:px-36 md:pt-0 gap-6">
        
        {/* Get in Touch Section */}
        <div className="flex flex-col p-6  ">
        <h1 className='md:text-3xl text-xl font-semibold my-5'>Get in Touch</h1>
          <div className="flex items-center mb-4">
            <img
              src={user}
              alt="Profile"
              className="w-20 h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl ">Azhar Ali Sheeno</h2>
              <p className="text-gray-700 text-sm font-bold">HR & Office Manager</p>
            </div>
          </div>
          <p className="text-gray-700 border-b border-1 w-96 my-2">
            
          </p>
          <h1 className='py-3 md:text-2xl text-xl  font-semibold text-lightgreen'>Contact Infromation</h1>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> Shahrah-e-faisal Karachi Pakistan
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> contact@heartcharity.org
          </p>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-aliceblue rounded-lg shadow-lg">
      
          <form className="   md:px-10 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
          <div className='flex gap-5 '>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
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
              className="appearance-none border e rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          </div>
          <div className='flex gap-5 '>
         
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="E-email"
            />
          </div>
          </div>
          
       
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="appearance-none border  rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              id="comment"
              placeholder="Your comment here..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-600 hover:bg-lightgreen w-full  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact