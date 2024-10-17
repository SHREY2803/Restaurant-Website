import React from "react";
import img1 from "../../assets/biryani.png";
import img2 from "../../assets/biryani2.png";
import img3 from "../../assets/biryani4.png";

const ServicesData = [
  {
    id: 1,
    img: img2,
    name: "Biryani",
    description:
      "Flavorful rice dish with tender meat, spices, and aromatic herbs.",
  },
  {
    id: 2,
    img: img1,
    name: "Chiken Curry",
    description:
      "Succulent chicken cooked in a spicy, aromatic curry sauce, bursting with bold flavors.",
  },
  {
    id: 3,
    img: img3,
    name: "Chicken Platter",
    description:
      "A delicious assortment of grilled chicken, spices, and sides, perfect for sharing.",
  },
];
function Services() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header */}
          <div 
          data-aos = "slide-up"
          data-aos-duration="400"
          data-aos-once="true"
          className="text-center mb-20 max-w-[400px] mx-auto">
            
            <h1 className="text-3xl font-bold">Our Services</h1>
            <p className="mt-3 text-md text-gray-400">
              {" "}
              Delight in authentic dishes like Biryani, Chicken Curry, and Chicken Platter, expertly crafted for dine-in, takeaway, and catering.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map(({ id, name, img, description }) => {
              return (
                <div
                data-aos="zoom-in"
                data-aos-duration="300" 
                key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-500 dark:hover:bg-primary  duration-300 shadow-xl">
                  <div className="h-[100px]">
                    <img
                      src={img}
                      alt=""
                      className="max-w-[150px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300 py-4"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold dark:group-hover:text-gray-800">{name}</h1>
                    <p className="text-gray-500 text-sm line-clamp-2 group-hover:text-gray-900
                    duration-300 dark:text-white">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Services;
