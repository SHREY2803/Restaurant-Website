import React, { useState } from "react";
import backgroundImg from "../../assets/vector3.png";
import food1 from "../../assets/biryani2.png";
import food2 from "../../assets/biryani3.png";
import food3 from "../../assets/biryani5.png";

const ImageList = [
  {
    id: 1,
    image: food1,
  },
  {
    id: 2,
    image: food2,
  },
  {
    id: 3,
    image: food3,
  },
];

const bgImage = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
function Hero() {
  const [imageId, setImageId] = useState(food1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to the Eatery Zone!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                temporibus architecto necessitatibus reiciendis, provident quos
                adipisci cumque officiis voluptas blanditiis.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img 
                src={imageId} 
                alt=""
                className="w-[300px] sm:w-[450px] mx-auto spin" 
                     />
              </div>
              <div className="flex lg:flex-col 
              lg:top-1/2
              lg:-translate-y-1/2 lg:py-2
              justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
              {ImageList.map((item)=>(
                <img 
                key={item.id}
                src={item.image}
                className="max-w-[80px]
                h-[80px] object-contain inline-block
                hover:scale-105
                duration-200"
                onClick={()=>{
                    setImageId(
                        item.id === 1
                            ?food1
                            : item.id ===2
                            ?food2
                            :food3
                    );

                }} />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
