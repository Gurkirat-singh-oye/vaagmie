import { useEffect, useState } from "react";
import BgImg from "../images/2/83891f33a61ecc16ac7acdb88f30ed87.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import MobileRest from "./mobileComps/MobileRest";

function Rest(params) {
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   params?.argObj?.indSlide?.on("change", (e) => setIndex(e.toFixed(0)));
  // }, [params?.argObj?.indSlide]);

  return (
    <motion.div>
      <motion.div className=" flex w-screen h-screen">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black from-2% z-50" /> */}

        <div
          className="absolute flex flex-row w-screen h-screen"
          // style={{
          //   backgroundImage: `url(${
          //     params?.argObj?.b_imgSource ? params?.argObj?.b_imgSource : BgImg
          //   })`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   width: "100vw",
          // }}
        >
          <div className="absolute backdrop-blur-sm bg-[#310500] bg-opacity-40 w-screen h-screen"></div>
          {params?.arrTWA.map((e, ind) => (
            <motion.img
              className="h-screen transition-all duration-300 ease-in-out"
              src={e?.b_imgSource}
              style={{
                // backgroundImage: `url(${e?.b_imgSource})`,
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                width: params?.argObj?.indSlide == ind ? "100vw" : "0vw",
              }}
            />
          ))}
        </div>

        <div className="fixed flex flex-col text-center mt-48 px-56 justify-center">
          <div className="text-5xl text-[#DADADA]">CATALOGUE</div>
          <div className="text-xl text-[#A7A7A7]">CATEGORIES</div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="flex items-center mt-28 z-10"
        >
          <motion.div
            variants={{
              offscreen: {
                opacity: 0,
                x: -400,
              },
              onscreen: {
                opacity: 0.85,
                x: 0,
                boxShadow: "6px 6px 5px rgba(0, 0, 0, 0.5)",
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.5,
                },
              },
            }}
            className="flex flex-col gap-2 justify-center items-center min-h-52 w-[40vw] bg-[#FFE6CE] z-10"
          >
            <div className="flex flex-col gap-2 m-4 cursor-pointer hover:scale-105 transition duration-300">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, duration: 1300 }}
                key={params?.argObj?.stripTitle}
                className="font-medium text-5xl"
              >
                {params?.argObj?.stripTitle}
              </motion.div>
              <div className="font-extralight text-2xl">
                {params?.argObj?.stripSubtitle}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              offscreen: {
                opacity: 0,
                y: -100,
                scale: 0.9,
              },
              onscreen: {
                opacity: 1,
                y: 0,
                scale: 1,
                boxShadow: "2px 2px 3px rgba(0, 0, 0, 0.4)",
                transition: {
                  duration: 1,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.6)", //shadow not in-sync with scale
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            className="flex flex-col h-[550px] w-[550px] -mt-28 bg-neutral-800 overflow-hidden z-10"
          >
            {/* <img
                src={params?.argObj?.f_imgSource}
                alt="Stock Image"
                className="block mask-test transition-all duration-300 ease-in-out scale-110 hover:scale-[1.2]"
              /> */}
            {params?.arrTWA.map((e, ind) => (
              <motion.img
                src={e?.f_imgSource}
                alt="Stock Image"
                style={{
                  height: params?.argObj?.indSlide == ind ? "550px" : "0px",
                }}
                className="block transition-all duration-300 ease-in-out scale-110 hover:scale-[1.2]"
              />
            ))}
          </motion.div>
          {/* <div className={`w-56 h-56 bg-gradient-to-t from-current`} ></div> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Rest;
