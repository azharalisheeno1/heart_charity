import React from 'react'
import Avtar1 from '../assets/images/avatar/1.jpg'
import Avtar2 from '../assets/images/avatar/2.jpg'
import Avtar3 from '../assets/images/avatar/3.jpg'
import Avtar4 from '../assets/images/avatar/4.jpg'
import { useTypewriter } from 'react-simple-typewriter'
function Customers() {

  const [typeEffect]=useTypewriter({
    words:['Heart Charity Hospitals provided exceptional care during my surgery: Maria Boss.','The staff at Heart Charity Hospitals are incredibly compassionate and professional: Angelina','Thanks to Heart Charity Hospitals, I felt supported and safe throughout my treatment: Mr. Jane','Heart Charity Hospitals truly prioritize their patients well-being and comfort: Mr.Bobe'],
    loop:{},
    typeSpeed:20,
    deleteSpeed:40
  })
  

  const Avatar=[
    {id:1,pic:Avtar1,name:"Maria Boss"},
    {id:2,pic:Avtar2,name:"Angelina"},
    {id:3,pic:Avtar3,name:"Jane "},
    {id:4,pic:Avtar4,name:"Bobe"},
  ]

  return (
    <>
    <div className="bg-aliceblue flex items-center p-10  justify-center my-5">

<div className="text-center max-w-6xl mx-auto     ">
    <h1 className="text-3xl text-gray-600 font-bold mb-4">Our Happy Customers</h1>
    <p className="mb-6 md:text-lg text-sm">{typeEffect}</p>
    
    <div className="flex justify-center gap-10 items-center ">
      {Avatar.map((avatar)=>
       <div key={avatar.id} className="flex flex-col justify-center items-center  ">
       <img src={avatar.pic} alt="Customer 3" className="w-12 h-12 rounded-full my-2 border-2 border-gray-300" />
       <span className="text-semibold">{avatar.name}</span>
   </div>
      )}

       
    </div>
</div>

</div>

    
    </>
  )
}

export default Customers