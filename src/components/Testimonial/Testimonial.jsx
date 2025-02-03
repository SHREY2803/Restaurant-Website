
import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Anurag",
    text: "I love this app! It’s user-friendly, has secure payments, and my food always arrives hot and delicious in just 30 minutes!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Rishi",
    text: "This app is a game changer! Quick delivery, tasty food, and the secure payment process gives me peace of mind. Highly recommend!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Prakhar",
    text: "I’m impressed! The app is easy to navigate, food arrives quickly, and everything tastes amazing. Definitely my go-to for meals!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <span id="testimonial"></span>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="mt-3 text-s text-primary">
            See what our satisfied customers are saying about us!
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6 mt-5"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="relative flex flex-col items-center justify-center gap-4 p-4 mx-4 text-center shadow-lg rounded-xl dark:bg-gray-800 bg-primary/10"
                    >
                      <img
                        className="block mx-auto rounded-full"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-sm text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="absolute top-0 right-0 font-serif text-black/20 text-9xl">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
