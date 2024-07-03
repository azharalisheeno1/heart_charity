import React from "react";
import pic1 from "../assets/images/causes/1.jpg";
import pic2 from "../assets/images/causes/2.jpg";
import pic3 from "../assets/images/causes/3.jpg";

function Causes() {
  const CauseCards = [
    {
      id: 1,
      imge: pic2,
      title: "Children Education",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
      raise: "18,500",
      goal: "32,000",
    },
    {
      id: 2,
      imge: pic3,
      title: "Poverty Development",
      description:
        "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor",
      raise: "27,600",
      goal: "60,000",
    },
    {
      id: 3,
      imge: pic1,
      title: "Supply drinking water",
      description:
        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
      raise: "84,600",
      goal: "100,000",
    },
  ];

  return (
    <div id="Causes" className="  mx-4   pt-28  sm:mx-10 ">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-600 text-center ">
       Our Causes
      </h1>
      <div className="flex flex-wrap justify-center md:pt-0 gap-10">
        {CauseCards.map((card) => (
          <div
            key={card.id}
            className=" sm:max-w-sm lg:max-w-sm rounded-2xl my-5 overflow-hidden shadow-2xl hover:shadow-lightgreen transition-shadow duration-300 ease-in-out"
          >
            <img
              className="w-full h-62 object-cover"
              src={card.imge}
              alt="Card image"
            />
            <div className="px-4 py-4">
              <div className="font-bold text-lg md:text-xl mb-2">
                {card.title}
              </div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
            <div className="border-b-2 h-1 bg-gray-400 mx-4"></div>
            <div className="px-4 py-4 flex justify-between">
              <p className="text-gray-700 font-bold">Raised: Rs: {card.raise}</p>
              <p className="text-gray-700 font-bold">
                Goal: Rs: {card.goal}
              </p>
            </div>
            <button className="bg-gray-500 hover:bg-lightgreen text-white py-3 w-full text-lg md:text-xl">
              Donate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Causes;
