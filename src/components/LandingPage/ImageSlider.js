import { useState } from "react";
import { motion } from "framer-motion";
// import city1 from "../assets/city1.png";
// import city2 from "../assets/city2.png";
// import city3 from "../assets/city3.png";
// import planet1 from "../assets/planet1.png";
// import planet2 from "../assets/planet2.png";
import img from "../../images/b0cf0f06aefe0340b084c3c076734edd.png";
import im1 from "../../images/1s80fqveyfr81.jpg";
import im2 from "../../images/20230803_163808.jpg";
import im3 from "../../images/647367.jpg";
import im4 from "../../images/hrzf910qkxgb1.jpg";
import arrow from "../../images/icons/Arrow Right.svg";


// #TODO: add finger drag thingy for mobile users
const ImageSlider = (props) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [img, im1, im2, im3, im4];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: props?.mobile ? "-27%" : "-17%", scale: 0.85, zIndex: 3 },
    left: { x: props?.mobile ? "-42%" : "-30%", scale: 0.7, zIndex: 2 },
    right: { x: props?.mobile ? "42%" : "30%", scale: 0.7, zIndex: 1 },
    right1: { x: props?.mobile ? "27%" : "17%", scale: 0.85, zIndex: 3 },
  };
  return (
    <div className=" my-8 xs:my-4 flex flex-col gap-8">
      <div>
        <div className="absolute mt-0 sm:-mt-32 lg:mt-0 flex justify-between w-full h-[40vh] lg:h-[490px] 2xl:h-[600px] z-[4] ">
          <div className="w-[50%] h-full sm:h-full bg-gradient-to-r from-[#F5F5FA] via-transparent to-transparent " />
          <div className="w-[50%] h-full sm:h-full bg-gradient-to-r to-[#F5F5FA] via-transparent from-transparent " />
        </div>
        <div className="flex items-center justify-center flex-col h-[40vh] lg:h-[450px] 2xl:h-[620px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              // src={image}
              alt={image}
              className="flex justify-center rounded-3xl xs:rounded-[40px] sm:shadow-lg shadow-neutral-500 overflow-clip"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{
                width: window?.innerWidth < 380 ? "200px" : window?.innerWidth < 740 ? "250px" : "70vw",
                height: window?.innerWidth < 380 ? "280px" : window?.innerWidth < 740 ? "370px" : window?.innerWidth < 1500 ? " 440px " : "600px",
                position: "absolute",
              }}
            >
              <img className="w-full object-cover" src={image} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className=" mt-0 sm:mt-20 lg:mt-0 flex flex-row justify-center gap-3 z-[5] ">
        <img
          src={arrow}
          className="cursor-pointer rotate-180"
          onClick={handleBack}
        />
        <div className=" py-2 flex flex-row items-center gap-2 " >
          {
            positions?.map((each, ind) => <div className={` w-2 h-2 rounded-full ${ positionIndexes[0] == ind ? ` bg-burntsienna scale-125 ` : ` bg-neutral-400 ` } transition-all duration-300 `} ></div>)
          }
        </div>
        <img src={arrow} className="cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
};

export default ImageSlider;
