import { useState } from "react";
import BgImage from "../images/1/cbc912ef2afe2ad46e89f972ae59b542.jpeg";
import "./First.css";
import { useEffect } from "react";

function First(params) {
  const [isHere, setIsHere] = useState(false);

  useEffect(() => {
    setIsHere(true);
    console.log(isHere);
  }, []);

  return (
    <div
    className=" h-screen overflow-hidden"
    >
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
    </div>
  );
}

export default First;
