import React from 'react'
import Pic1 from '../assets/images/icons/hands.png'
import Pic2 from '../assets/images/icons/heart.png'
import Pic3 from '../assets/images/icons/receive.png'
import Pic4 from '../assets/images/icons/scholarship.png'
import { NavLink } from 'react-router-dom'
import '../App.css'
function Cards() {

const cards=[
  {id:1,img:Pic1,heading:"Become a",span:"Volunteer",path:"/form"},
  {id:2,img:Pic2,heading:"Caring ",span:"Earth",path:"/form"},
  {id:3,img:Pic3,heading:"Make a",span:"Donation",path:"/form"},
  {id:4,img:Pic4,heading:"Program",span:"Scholership",path:"/form"},
]

return (
    <>

      <h1 className='text-center md:text-4xl md:mb-4 font-semibold mt-10 text-gray-500'>  Welcome to Kind Heart Charity</h1>
      

      <div className='md:flex w-[300px] md:w-full mx-auto  gap-10 justify-center    '>
      {cards.map((card)=><NavLink key={card.id} to={card.path} >
        <div className='md:mx-12 my-3 rounded-xl    w-full px-5 transition-all ease-linear hover:scale-105 hover:shadow-2xl card'>
      <img src={card.img} alt="Volunteer" className='mx-auto card-img' />
      <h1 className='py-3 text-center md:text-xl text-lg text-lightgreen card-text'>
       {card.heading} <span className='text-xl md:text-2xl font-bold text-lightgreen'>{card.span}</span>
      </h1>
    </div>

      </NavLink>)}
      
    </div>
   
    
    
    </>
  )
}

export default Cards