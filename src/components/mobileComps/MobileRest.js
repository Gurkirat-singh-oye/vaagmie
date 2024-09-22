import BgImg from "../../images/2/83891f33a61ecc16ac7acdb88f30ed87.jpeg";

function MobileRest(params) {
  return (
    <div className="relative h-[700vh] z-30">
      <div className="sticky top-0">
        <div
          className="flex items-center w-screen h-screen"
          style={{
            backgroundImage: `url(${
              params?.argObj?.b_imgSource ? params?.argObj?.b_imgSource : BgImg
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
          }}
        >
          <div className="absolute backdrop-blur-sm bg-[#310500] bg-opacity-40 w-screen h-screen"></div>
          <div className="flex flex-col mt-6 items-center z-30">
            <div className="flex flex-col text-center py-10 justify-center">
              <div className="text-5xl text-[#DADADA]" >CATALOGUE</div>
              <div className="text-xl text-[#A7A7A7]" >CATEGORIES</div>
            </div>
            <div className="flex flex-col w-screen h-[65vh] bg-[#FFE6CE] bg-opacity-85 z-10">
              <div className="flex flex-col pt-3 h-[170px] text-center ">
                <div
                  className="font-medium"
                  style={{
                    fontSize: `${window?.innerWidth < 330 ? "35px" : "45px"}`,
                  }}
                >
                  {params?.argObj?.stripTitle}
                </div>
                <div className="font-extralight text-2xl mx-2">
                  {params?.argObj?.stripSubtitle}
                </div>
              </div>
              <div className="flex w-[95vw] h-[400px] mx-auto mb-2 bg-neutral-800 rounded-sm overflow-clip">
                <img
                  src={params?.argObj?.f_imgSource}
                  alt="Stock Image"
                  className="block scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileRest;
