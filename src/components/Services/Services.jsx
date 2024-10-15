import React from "react";
import img1 from "../../assets/biryani.png";
import img2 from "../../assets/biryani2.png";
import img3 from "../../assets/biryani4.png";

const ServicesData = [
  {
    id: 1,
    img: img1,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: img2,
    name: "Chiken kari",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: img3,
    name: "Cold Cofee",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
];
function Services() {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              dignissimos est iste consequatur perferendis illum tempora quidem
              ad? Error, enim.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map(({ id, name, img, description }) => {
              return (
                <div key={id} className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-500 dark:hover:bg-primary  duration-300 shadow-xl">
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
