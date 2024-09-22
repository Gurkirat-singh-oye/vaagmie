import { useState } from "react";
import BgImage from "../images/1/cbc912ef2afe2ad46e89f972ae59b542.jpeg";
import { motion } from "framer-motion";
import { useEffect } from "react";

function First(params) {
  // const [isHere, setIsHere] = useState(false);

  // useEffect(() => {
  //   setIsHere(true);
  //   console.log(isHere);
  // }, []);

  return (
    < motion.div
      style={{
        height: params?.heightAnim
      }}
    className=" overflow-clip"
    >
      { params?.phoneView && params?.juteStrip}
      <div
        className="flex"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          className="absolute bg-amber-50 opacity-55"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        ></div>
      </div>
    </motion.div>
  );
}

export default First;
