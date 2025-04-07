import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import dress from "../../images/dresses/813aab984506721e77875c680afea5b8.jpg"



const imgs = [
  "src/images/dresses/55c7ab112b1749c7ffc0a7d32006214a.jpg",
  "src/images/dresses/55c7ab112b1749c7ffc0a7d32006214a.jpg",
  "src/images/dresses/55c7ab112b1749c7ffc0a7d32006214a.jpg",
  "src/images/dresses/55c7ab112b1749c7ffc0a7d32006214a.jpg",
  "src/images/dresses/55c7ab112b1749c7ffc0a7d32006214a.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 10;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 3) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 3) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 32}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
        {/* <div className="w-20 h-20 bg-neutral-500" >

        </div> */}
      </motion.div>

      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
            //   scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="flex flex-row items-center shrink-0 rounded-xl object-cover"
          >
            <div className="py-3 px-2 flex flex-row gap-3 w-[26vw] h-96 " >
                <div className="flex justify-center w-[50%] overflow-clip " >
                    <img src={dress} />
                </div>
                <div className=" flex flex-col justify-center " >
                    <div></div>
                    <div className="font-bold" >Gorgeous</div>
                    <div>Very comfotable and smooth fabric.</div>
                </div>
            </div>
            <div className=" h-80 w-[2px] bg-neutral-200 " />
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default SwipeCarousel;