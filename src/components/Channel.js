import { useEffect, useState, useRef } from "react";
import First from "./First";
import Rest from "./Rest";
import Logo from "../images/1/Original-Base-transparent 4.svg";
import LogoName from "../images/1/Original-Base-transparent 5.png";

import CGimg from "../images/2/unsplash_f43Ubfx3ooo.png";
import BgImg from "../images/2/83891f33a61ecc16ac7acdb88f30ed87.jpeg";
import EG_FG from "../images/3/b0b8e373291399e7a9b633249816eded.jpeg";
import EG_BG from "../images/3/Rectangle 4.png";
import WG_FG from "../images/4/19b9b04d6ecb11309f284c655eb96d2f.jpeg";
import WG_BG from "../images/4/8e404d9bbb35118fc15c617a691daae2.jpeg";
import LG_FG from "../images/5/0351de5af2ba0e19e24caed126dbe7a6.jpeg";
import LG_BG from "../images/5/42091f6e8be8cd0e2f60a04491f697f0.png";
import EcG_FG from "../images/6/5da5f062c7a8c976d1295a181d484130.jpeg";
import EcG_BG from "../images/6/5da5f062c7a8c976d1295a181d484130.jpeg";
import ElG_FG from "../images/7/fe7cf3f8408ab7d58c8fa13368b8d443.png";
import ElG_BG from "../images/7/0536d8f6efd303e16750fffb9c9cf97b.jpeg";

import JuteStrip from "../images/1/52b41c09dc65b88ce6b6644b572ba855.png";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import MobileRest from "./mobileComps/MobileRest";

function Channel() {
  const targetRef = useRef(null);
  const [index, setIndex] = useState(0);

  const restRef = useRef(null);
  const isInView = useInView(restRef);

  const slides = [
    {
      stripTitle: "Corporate Gifting",
      stripSubtitle: "Diaries, Pens, Keychains, Bags and Cardholders",
      f_imgSource: CGimg,
      b_imgSource: BgImg,
    },
    {
      stripTitle: "Events Gifting",
      stripSubtitle: "Momentus, Planters and Trophies",
      f_imgSource: EG_FG,
      b_imgSource: EG_BG,
    },
    {
      stripTitle: "Wedding Gifting",
      stripSubtitle: "Dry Fruits, Bakery items, silverware ...etc",
      f_imgSource: WG_FG,
      b_imgSource: WG_BG,
    },
    {
      stripTitle: "Luxury Gifting",
      stripSubtitle: "Gold plated momentous, scarf and tie set, ...etc",
      f_imgSource: LG_FG,
      b_imgSource: LG_BG,
    },
    {
      stripTitle: "Ecofriendly Gifting",
      stripSubtitle: "Planters, Set made from eg cork, shells, ...etc",
      f_imgSource: EcG_FG,
      b_imgSource: EcG_BG,
    },
    {
      stripTitle: "Electronic Gifting",
      stripSubtitle: "Speakers, ear plugs, power bank, ...etc",
      f_imgSource: ElG_FG,
      b_imgSource: ElG_BG,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100.79%"]);
  const juteStripMotion = useTransform(
    scrollYProgress,
    [0, 0.12],
    ["0%", "-250%"]
  );
  const logoWidth = useTransform(
    scrollYProgress,
    [0, 0.14],
    ["50vw", "11vw"]
  );
  const logoPadding = useTransform(
    scrollYProgress,
    [0, 0.14],
    ["40px", "12px"]
  );
  const mvLogoPadding = useTransform(
    //its also responsible for logo's size
    scrollYProgress,
    [0, 0.07],
    ["20px", "110px"]
  );
  const mvLogoOpacity = useTransform(
    scrollYProgress,
    [0, 0.07],
    ["100%", "0%"]
  );
  const f_imgHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );
  const indSlide = useTransform(scrollYProgress, [0, 1.8], [0, 9]);
  const mvf = useTransform(scrollYProgress, [0, 0.146], ["100vh", "0vh"]);

  useEffect(() => {
    indSlide?.on("change", (e) => setIndex(e?.toFixed(0)));
  }, []);

  return (
    <div id="channel">
      {window?.innerWidth > 940 ? (
        <div className="">
          <section
            ref={targetRef}
            className={`w-full h-[600vh] bg-neutral-700 overflow-clip`}
          >
            <motion.div
              style={{
                left: juteStripMotion,
              }}
              className="fixed z-30 w-[100vw] ml-[60vw] "
            >
              <img
                src={JuteStrip}
                alt="jutestrip"
                className="rotate-[-57deg] scale-[1.6] overflow-clip"
              />
            </motion.div>
            <motion.div
              className="fixed flex z-20"
              style={{
                left: juteStripMotion,
              }}
            >
              <First />
            </motion.div>
            <motion.div
              style={{
                padding: logoPadding,
                width: logoWidth,
              }}
              className="fixed flex flex-col z-20"
            >
              <img src={Logo} />
              <img src={LogoName} />
            </motion.div>
            <div className="sticky top-0">
              <div ref={restRef} className="">
                <Rest
                  isInView={isInView}
                  arrTWA = {slides}
                  scrollProgress = {f_imgHeight}
                  argObj={{
                    stripTitle: slides[index]?.stripTitle,
                    stripSubtitle: slides[index]?.stripSubtitle,
                    f_imgSource: slides[index]?.f_imgSource,
                    b_imgSource: slides[index]?.b_imgSource,
                    indSlide: index,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="w-screen bg-neutral-900">
          <motion.div
            style={{
              paddingRight: mvLogoPadding,
              paddingLeft: mvLogoPadding,
            }}
            className="fixed w-screen flex items-center mx-auto flex-col z-50"
          >
            <img src={Logo} />
            <motion.img
              style={{
                opacity: mvLogoOpacity,
              }}
              src={LogoName}
            />
          </motion.div>
          <First
            phoneView={true}
            heightAnim={mvf}
            juteStrip={
              <motion.div
                style={{
                  top: juteStripMotion,
                }}
                className="fixed z-30 w-[100vw] mt-[88vh] ml-56 "
              >
                <img
                  src={JuteStrip}
                  alt="jutestrip"
                  className=" scale-[2.6] rotate-[-57deg] overflow-clip"
                />
              </motion.div>
            }
          />
          <MobileRest
            isInView={isInView}
            argObj={{
              stripTitle: slides[index]?.stripTitle,
              stripSubtitle: slides[index]?.stripSubtitle,
              f_imgSource: slides[index]?.f_imgSource,
              b_imgSource: slides[index]?.b_imgSource,
              indSlide: indSlide,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Channel;
