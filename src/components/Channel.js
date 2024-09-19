import { useEffect, useState, useRef } from "react";
import First from "./First";
import Rest from "./Rest";
import Logo from "../images/1/Original-Base-transparent 4.svg";
import LogoName from "../images/1/Original-Base-transparent 5.png";
import CGimg from "../images/2/unsplash_f43Ubfx3ooo.png";
import JuteStrip from "../images/1/52b41c09dc65b88ce6b6644b572ba855.png";
import { useScroll, useTransform, motion, clamp } from "framer-motion";

function Channel() {
  const [isHere, setIsHere] = useState(false);
  const targetRef = useRef(null);

  const slides = [
    {
      stripTitle: "Corporate Gifting",
      stripSubtitle: "Diaries, Pens, Keychains, Bags and Cardholders",
      imgSource: CGimg,
    },
    {
      stripTitle: "Events Gifting",
      stripSubtitle: "Momentus, Planters and Trophies",
      imgSource: null,
    },
    {
      stripTitle: "Wedding Gifting",
      stripSubtitle: "Dry Fruits, Bakery items, silverware... etc.",
      imgSource: null,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100.79%"], {clamp: false});
  const juteStripMotion = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const logoWidth = useTransform(scrollYProgress, [0, 1], ["900px", "300px"]);
  const logoPadding = useTransform(scrollYProgress, [0, 1], ["40px", "12px"]);

  useEffect(() => {
    setIsHere(true);
  }, []);

  return (
    <div>
      {window?.innerWidth > 640 ? (
        <section ref={targetRef} className={`h-[200vh] bg-neutral-700 `}>
            <div className="fixed w-screen h-screen bg-slate-500" ></div>
          <div className="sticky top-0 overflow-hidden">
            <motion.div
              style={{
                padding: logoPadding,
                width: logoWidth,
              }}
              className="absolute z-40"
            >
              <img src={Logo} />
            </motion.div>
            <motion.div style={{ x }} className="flex">
              <First />
              <motion.div
                style={{
                  left: juteStripMotion,
                }}
                className="absolute z-30 w-[100vw] ml-[50vw] "
              >
                <img
                  src={JuteStrip}
                  alt="jutestrip"
                  className="rotate-[-57deg] scale-[1.6] "
                />
              </motion.div>
              {/* <Rest
                argObj={{
                  stripTitle: "Corporate Gifting",
                  stripSubtitle:
                    "Diaries, Pens, Keychains, Bags and Cardholders",
                  imgSource: CGimg,
                }}
              /> */}
            </motion.div>
          </div>

          {/* <div className="fixed" >
            <Rest
                argObj={{
                  stripTitle: "Corporate Gifting",
                  stripSubtitle:
                    "Diaries, Pens, Keychains, Bags and Cardholders",
                  imgSource: CGimg,
                }}
              />
            </div> */}
        </section>
      ) : (
        <div className="relative bg-neutral-900 overflow-hidden">
          <div
            // style={{ x }}
            className=""
          >
            <div>
              <img
                src={JuteStrip}
                alt="jutestrip"
                className=" absolute z-50 rotate-[-63deg] scale-[2.5] top-[480px] left-[290px]"
              />
            </div>
            {/* {elements?.map((slide) => (
              <div>{slide}</div>
            ))} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Channel;
