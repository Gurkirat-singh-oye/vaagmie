import BgImg from "../../images/2/83891f33a61ecc16ac7acdb88f30ed87.jpeg"

function MobileRest() {
  return (
    <div className=" flex w-screen h-screen">
      {/* <div
        className="fixed w-screen h-screen"
        style={{
          backgroundImage: `url(${BgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
        <div className="absolute backdrop-blur-md bg-orange-900 bg-opacity-30 w-screen h-screen"></div>
      </div> */}
      {/* <div className="flex items-center z-10">
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
      </div> */}
    </div>
  );
}

export default MobileRest;
