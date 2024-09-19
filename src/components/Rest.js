import BgImg from "../images/2/83891f33a61ecc16ac7acdb88f30ed87.jpeg";
import { motion } from "framer-motion";

function Rest(params) {
  return (
    <motion.div>
      {window?.innerWidth > 640 ? (
        <motion.div className=" flex w-screen h-screen">
          <div
            className="absolute w-screen h-screen"
            style={{
              backgroundImage: `url(${BgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className="absolute backdrop-blur-sm bg-[#310500] bg-opacity-40 w-screen h-screen"></div>
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
                <div className="font-medium text-5xl">
                  {params?.argObj?.stripTitle}
                </div>
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
              className="flex h-[550px] w-[550px] -mt-28 bg-neutral-800 overflow-hidden z-10"
            >
              <img
                src={params?.argObj?.imgSource}
                alt="Stock Image"
                className="block transition-all duration-300 ease-in scale-110 hover:scale-[1.2]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <div className=" flex w-screen h-screen">
          <div
            className="absolute w-screen h-screen"
            style={{
              backgroundImage: `url(${BgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100vw",
            }}
          >
            <div className="absolute backdrop-blur-md bg-orange-900 bg-opacity-30 w-screen h-screen"></div>
          </div>
          <div className="flex items-center z-10">
            <div className="flex flex-col w-screen h-[70vh] bg-[#FFE6CE] opacity-85 z-10">
              <div className="flex flex-col pt-3 text-center hover:scale-105 transition duration-300">
                <div
                  className="font-medium"
                  style={{
                    fontSize: `${window?.innerWidth < 330 ? "35px" : "45px"}`,
                  }}
                >
                  Corporate Gifting
                </div>
                <div className="font-extralight text-2xl">
                  {" "}
                  Diary, Pen, Keychain, bags and Cardholders
                </div>
              </div>
              <div className="flex h-full m-4 bg-neutral-800"></div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Rest;
