import { HiArrowNarrowRight } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import HomeImage from "../../Assets/2926557.jpg";
import HomeImage1 from "../../Assets/5351347.jpg";
import HomeImage2 from "../../Assets/Internet-go.jpg";
import HomeImage3 from "../../Assets/3129497.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const images = [HomeImage, HomeImage1, HomeImage2, HomeImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="py-32">
        <div className="flex flex-col md:flex-row items-center justify-around ">
          {/* Left section for text */}
          <div className="md:w-1/2 order-2 md:order-none py-10 animate-transFromLeft">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8  text-slate-800">
              Make the right cv and land your dream job!
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Craft a standout CV that showcases your skills and grabs
              employers' attention with our platform. Let's make your CV shine
              brighter than ever before!
            </p>

            <div className="bg-slate-800 text-light rounded-xl p-5 w-fit hover:bg-slate-300 duration-150">
              <button
                onClick={() => {
                  navigate("/choosecv");
                }}
                className="flex justify-between items-center btn-blue text-slate-800  bg-white hover:bg-slate-800 hover:text-white"
              >
                Select your CV template with care
                <HiArrowNarrowRight className="ps-1 text-xl" />
              </button>
            </div>
          </div>

          <div className="">
            <img
              src={images[currentImageIndex]}
              alt={`l ${currentImageIndex}`}
              className="lg:w-[500px] w-[400px] flex-1 animate-float h-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
