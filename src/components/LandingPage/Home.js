import ImageSlider from "./ImageSlider";
import Logo from "../../images/1/Original-Base-transparent 4.svg";
import catImg from "../../images/6/5da5f062c7a8c976d1295a181d484130.jpeg";

import dress1 from "../../images/dresses/3190532e778f044e0fb7d96b5cc5fcd5.jpg";
import dress2 from "../../images/dresses/55c7ab112b1749c7ffc0a7d32006214a.jpg";
import dress3 from "../../images/dresses/813aab984506721e77875c680afea5b8.jpg";
import dress4 from "../../images/dresses/a7e70c598d60fba389f995cb1070ad6c.jpg";

import stcmBg from "../../images/fc1da22e23da5fca239ba14e422c4d81.png";
import footerBG from "../../images/footerBG.png";

import searchIcon from "../../images/icons/Search.svg";
import cartIcon from "../../images/icons/cart.svg";
import userIcon from "../../images/icons/User.svg";
import DragCarousel from "./DragCarousel";

import truck from "../../images/icons/truck.svg";
import starbox from "../../images/icons/starbox.svg";
import e2e from "../../images/icons/end2endarrows.svg";
import giftbox from "../../images/icons/giftbox.svg";

import giftboxrmbg from "../../images/gifthampers.png";

import logo1 from "../../images/Vaagmiee-(2) 1.png";
// import logo2 from "../../images/1/Original-Base-transparent 5.png";
import faceIco from "../../images/icons/face.svg";
import instaIco from "../../images/icons/insta.svg";
import xIco from "../../images/icons/x.svg";
import linkIco from "../../images/icons/link.svg";
import menu from "../../images/icons/menu.svg";

import arcSvg from "../../images/arc.png";
import arcSvg2 from "../../images/arc2.png";

import { Link } from "react-router-dom";
import MobileHome from "../mobileComps/MobileHome";
import { useEffect, useRef, useState } from "react";

import forHimImg from "../../images/storycatimages/forhim.png";
import forHerImg from "../../images/storycatimages/forher.png";
import ForKidsImg from "../../images/storycatimages/forkids.jpeg";
import personImg from "../../images/storycatimages/personalized.png";
import occasionImg from "../../images/storycatimages/ocassion.png";
import corpoImg from "../../images/storycatimages/corpo.png";
import VagButton from "../VagButton";

import koiv from "../../images/koiv.png";

function OPCFilter(params) {
  return (
    <div
      className={`" px-[9px] 2xs:w-[110px] sm:w-[240px] h-[30px] sm:h-[45px] flex items-center justify-center text-xs sm:text-xl border font-sans font-medium border-burntsienna ${
        params?.selected ? ` bg-burntsienna text-white ` : ` text-burntsienna `
      } hover:bg-neutral-200 hover:text-burntsienna transition-all duration-300 rounded-full cursor-pointer `}
    >
      {params?.label}
    </div>
  );
}

function OPCard(params) {
  const [enquiry, setEnquiry] = useState(false);

  return (
    <div
      className=" relative p-[1px] sm:p-4 w-[180px] h-[315px] lg:w-[280px] lg:h-[420px] 2xl:w-[420px] 2xl:h-[630px] flex flex-col gap-2 lg:gap-4 2xl:gap-6 justify-between items-center rounded-[30px] group cursor-pointer z-0 "
      onMouseEnter={() => setEnquiry(true)}
      onMouseLeave={() => setEnquiry(false)}
      onClick={() => {
        if (window?.innerWidth < 640) {
          params?.setcardMag && params?.setcardMag(true);
        }
      }}
    >
      <div className=" absolute inset-0 w-full h-full group-hover:shadow-lg group-hover:scale-105 rounded-[35px] md:rounded-[64px] transition-all duration-500 -z-10 " />
      <div className=" w-full h-full rounded-[30px] overflow-hidden ">
        <img src={koiv} className=" w-full h-full object-cover " />
      </div>
      <div className=" text-center text-xl lg:text-[25px] 2xl:text-[40px] font-medium ">
        White Leather Bag
      </div>

      <div
        className={` ${
          window?.innerWidth > 640 && enquiry
            ? ` h-[140px] sm:h-[200px] opacity-100 `
            : ` h-0 opacity-0 `
        } w-full flex flex-col items-center gap-3 lg:gap-6 transition-all duration-300 overflow-hidden `}
      >
        <div className=" w-3/4 flex flex-row justify-between text-base lg:text-xl 2xl:text-3xl ">
          <div>Cost</div>
          <div className=" w-[2px] h-full bg-burntsienna " />
          <div>rating</div>
        </div>{" "}
        <VagButton label={"Enquire Now"} />
      </div>
    </div>
  );
}

function ProductCollection(params) {
  const [selectedOPCF, setselectedOPCF] = useState(0);
  const opcfArray = ["All Products", "Latest Products", "Best Seller"];

  return (
    <div className="">
      <div className="w-full flex justify-center text-center text-2xl sm:text-5xl font-semibold font-playfair text-burntsienna ">
        Our Product Collection
      </div>
      <div className=" my-8 flex flex-row gap-3 lg:gap-12 justify-center ">
        {opcfArray?.map((each, ind) => {
          return (
            <div onClick={() => setselectedOPCF(ind)}>
              <OPCFilter label={each} selected={ind == selectedOPCF} />
            </div>
          );
        })}
      </div>
      <div className=" my-10 mx-auto w-full md:w-[85vw] 2xl:w-[75vw] flex flex-row flex-wrap gap-4 md:gap-8 2xl:gap-12 justify-center ">
        <OPCard cardMag={params?.opcardmag} setcardMag={params?.setopcardmag} />
        <OPCard />
        <OPCard />
        <OPCard />
        <OPCard />
        <OPCard />
        <OPCard />
        <OPCard />
      </div>
    </div>
  );
}

function Menu(params) {
  return (
    <div className="mr-12 flex flex-row gap-8 ">
      <div>
        <img src={searchIcon} />
      </div>
      <div onClick={() => {params?.setIsMenu(!params?.isMenu); params?.setMenuVisibility(true)}}>
        <img src={menu} />
      </div>
    </div>
  );
}

function HomeNav() {
  const [isMenu, setIsMenu] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div className="fixed w-[100vw] z-50">
      <div className="w-full h-6 flex justify-center bg-[#FFEBE5] ">
        Offers slide show
      </div>

      <div
        className={` relative sm:px-2 2xl:px-16 flex flex-row h-[80px] lg:h-[90px] 2xl:h-[110px] justify-between items-center sm:bg-[#F5F5FA] `}
      >
        <div className=" absolute w-full h-full backdrop-blur-[8px] bg-[#FFEBE5] bg-opacity-20 -z-10 " />
        <div className="ml-10 text-6xl font-thin cursor-pointer">
          <img className="w-[90px] lg:w-[110px] my-2" src={logo1} />
        </div>
        <div className="flex flex-row items-center">
          {window?.innerWidth < 1270 ? (
            ""
          ) : (
            <div className=" lg:-mr-16 flex flex-row justify-center items-center px-14 gap-6 2xl:gap-10 text-neutral-600 text-base 2xl:text-lg ">
              <div className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 ">
                Home
              </div>
              <div className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 ">
                Block-Printed
              </div>
              <div className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 ">
                Gifting Solutions
              </div>
              <div className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 ">
                Customization
              </div>
              <div className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 ">
                About Us
              </div>
              <div className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 ">
                Contact US
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center gap-4 lg:gap-6 2xl:gap-12">
          <div
            className="py-2 mx-4 px-4 hidden lg:block text-burntsienna text-nowrap text-xl font-bold text-center bg-[#F5F5FA] rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: `-5px -5px 10px rgba(255, 255, 255, 0.50), 
                          5px 5px 10px rgba(170, 170, 204, 0.25), 
                          10px 10px 20px rgba(170, 170, 204, 0.50), 
                          -10px -10px 20px #FFF`,
            }}
          >
            Download Catalogue
          </div>
          {window?.innerWidth < 1270 ? (
            <Menu isMenu={isMenu} setIsMenu={setIsMenu} setMenuVisibility={setMenuVisibility} />
          ) : (
            <div className="mr-20 flex flex-row gap-4">
              <div className="p-1 cursor-pointer">
                <img
                  className="hover:scale-125 active:scale-90 transition-all duration-300 "
                  src={searchIcon}
                />
              </div>
              <div className="p-1 cursor-pointer">
                <img
                  className="hover:scale-125 active:scale-90 transition-all duration-300 "
                  src={cartIcon}
                />
              </div>
              <div className="p-1 cursor-pointer">
                <Link to="/me">
                  <img
                    className="hover:scale-125 active:scale-90 transition-all duration-300 "
                    src={userIcon}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* <div className="absolute w-full h-full backdrop-blur-md -z-10"></div> */}
      </div>

      <div
        className={`relative ${ isMenu ? ` h-full ` : ` h-0 ` } ${
          isMenu ? ` w-[100vw] ` : " w-0 "
        } ml-auto flex flex-col gap-10 ease-in-out duration-700 transition-all overflow-hidden  `}
      >
        <div className=" absolute w-full h-full backdrop-blur-[8px] bg-[#FFEBE5] bg-opacity-20 -z-10 " />
        <div className=" py-4 w-full h-full flex flex-col gap-6 items-center text-4xl text-nowrap text-burntsienna ">
          <div className="cursor-pointer hover:text-lg transition-all duration-300 ">
            Home
          </div>
          <div className="cursor-pointer hover:text-lg transition-all duration-300 ">
            Block-Printed
          </div>
          <div className="cursor-pointer hover:text-lg transition-all duration-300 ">
            Gifting Solutions
          </div>
          <div className="cursor-pointer hover:text-lg transition-all duration-300 ">
            Customization
          </div>
          <div className="cursor-pointer hover:text-lg transition-all duration-300 ">
            About Us
          </div>
          <div className="cursor-pointer hover:text-lg transition-all duration-300 ">
            Contact US
          </div>
        </div>
        <div className=" m-3 w-full flex flex-row items-center justify-center gap-6 " >
          <div
            className=" h-12 flex flex-row flex-grow items-center justify-center text-burntsienna text-xl text-nowrap font-bold text-center bg-[#F5F5FA] rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: `-5px -5px 10px rgba(255, 255, 255, 0.50), 
                          5px 5px 10px rgba(170, 170, 204, 0.25), 
                          10px 10px 20px rgba(170, 170, 204, 0.50), 
                          -10px -10px 20px #FFF`,
            }}
          >
            Download Catalogue
          </div>
          <div className="p-1 w-16 cursor-pointer">
            <Link to="/me">
              <img
                className="hover:scale-125 active:scale-90 transition-all duration-300 "
                src={userIcon}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryCats(params) {
  const [isTooltip, setIsTooltip] = useState(false);

  return (
    <div
      className=" w-16 2xl:w-28 h-[70px] sm:h-20 2xl:h-36 flex flex-col gap-2 2xl:gap-4 items-center "
      onMouseEnter={() => setIsTooltip(true)}
      onMouseLeave={() => setIsTooltip(false)}
    >
      <div className=" w-16 2xl:w-28 h-16 2xl:h-28 flex flex-shrink-0 shadow-neutral-900 shadow-md 2xl:shadow-lg hover:shadow-neutral-700 hover:shadow-lg 2xl:hover:shadow-xl hover:scale-105 rounded-full transition-all duration-300 cursor-pointer bg-neutral-300 overflow-hidden ">
        <img src={params?.img} className=" object-cover " />
      </div>
      <div
        className={` ${
          window?.innerWidth < 450 || isTooltip
            ? ` opacity-100 `
            : ` opacity-0 `
        } w-full text-center text-burntsienna font-medium text-xs sm:text-sm 2xl:text-base text-nowrap transition-all duration-300 `}
      >
        {params?.label}
      </div>
    </div>
  );
}

function Home(params) {
  const storyCatArr = [
    {
      img: forHimImg,
      label: "For Him",
    },
    {
      img: forHerImg,
      label: "For Her",
    },
    {
      img: ForKidsImg,
      label: "For Kids",
    },
    {
      img: personImg,
      label: "Personalized",
    },
    {
      img: occasionImg,
      label: "Occasional",
    },
    {
      img: corpoImg,
      label: "Corporate",
    },
  ];

  const reviews = [
    {
      rating: 4.5,
      review:
        "I wanted something unique for my sister’s wedding, and Vaagmiee delivered beyond expectations.  \
        The packaging, the presentation, and the product selection were all on point. She was overjoyed! \
        Thank you for making her day extra special.- Simran Khanna",
    },
    {
      rating: 4,
      review:
        "I ordered a luxury gift box for my best friend's birthday, and it was a showstopper! \
      The satin robe, scented candles, and chocolates were just perfect. The packaging looked so aesthetic.\
       Will definitely order again!- Meera Sethi",
    },
    {
      rating: 4.5,
      review:
        "I wanted something unique for my sister’s wedding, and Vaagmiee delivered beyond expectations.  \
        The packaging, the presentation, and the product selection were all on point. She was overjoyed! \
        Thank you for making her day extra special.- Simran Khanna",
    },
    {
      rating: 4,
      review:
        "I ordered a luxury gift box for my best friend's birthday, and it was a showstopper! \
      The satin robe, scented candles, and chocolates were just perfect. The packaging looked so aesthetic.\
       Will definitely order again!- Meera Sethi",
    },
    {
      rating: 4.5,
      review:
        "I wanted something unique for my sister’s wedding, and Vaagmiee delivered beyond expectations.  \
        The packaging, the presentation, and the product selection were all on point. She was overjoyed! \
        Thank you for making her day extra special.- Simran Khanna",
    },
    {
      rating: 4,
      review:
        "I ordered a luxury gift box for my best friend's birthday, and it was a showstopper! \
      The satin robe, scented candles, and chocolates were just perfect. The packaging looked so aesthetic.\
       Will definitely order again!- Meera Sethi",
    },
    {
      rating: 4.5,
      review:
        "I wanted something unique for my sister’s wedding, and Vaagmiee delivered beyond expectations.  \
        The packaging, the presentation, and the product selection were all on point. She was overjoyed! \
        Thank you for making her day extra special.- Simran Khanna",
    },
    {
      rating: 4,
      review:
        "I ordered a luxury gift box for my best friend's birthday, and it was a showstopper! \
      The satin robe, scented candles, and chocolates were just perfect. The packaging looked so aesthetic.\
       Will definitely order again!- Meera Sethi",
    },
    {
      rating: 4.5,
      review:
        "I wanted something unique for my sister’s wedding, and Vaagmiee delivered beyond expectations.  \
        The packaging, the presentation, and the product selection were all on point. She was overjoyed! \
        Thank you for making her day extra special.- Simran Khanna",
    },
    {
      rating: 4,
      review:
        "I ordered a luxury gift box for my best friend's birthday, and it was a showstopper! \
      The satin robe, scented candles, and chocolates were just perfect. The packaging looked so aesthetic.\
       Will definitely order again!- Meera Sethi",
    },
  ];

  const [revScrollStop, setrevScrollStop] = useState(false);
  const [mobMg, setmobMag] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId;
    const speed = revScrollStop ? 0 : 1;

    const step = () => {
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0; // reset
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [revScrollStop]);

  return (
    <>
      {mobMg && (
        <div
          className=" fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center z-[15] "
          onClick={() => setmobMag(false)}
        >
          <div className=" absolute w-full h-full backdrop-blur-sm " />
          <OPCard />
        </div>
      )}
      <div className="  ">
        <HomeNav />
        {
          // window?.innerWidth < 1200 ? <MobileHome /> :
          <div className=" w-screen sm:w-full bg-[#F5F5FA] overflow-hidden">
            <div
              className={` mt-24 sm:mt-28 2xl:mt-36 p-4 w-full h-full flex flex-row sm:justify-center gap-6 sm:gap-11 2xl:gap-16 overflow-x-auto no-scrollbar `}
            >
              {storyCatArr?.map((each, ind) => (
                <StoryCats img={each?.img} label={each?.label} />
              ))}
            </div>
            <div className=" md:-mt-4 2xl:pb-12">
              {window?.innerWidth < 740 ? (
                <ImageSlider mobile={true} />
              ) : (
                <ImageSlider />
              )}
            </div>

            <div
              className=" my-6 sm:my-16 h-[100px] lg:h-[47vh] flex justify-center items-center text-center text-base 2xs:text-lg lg:text-5xl 2xl:text-7xl font-adamina text-burntsienna bg-fixed "
              style={{
                backgroundImage: `url(${stcmBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              Select Thoughtfully, Create Memories!
            </div>

            <ProductCollection opcardmag={mobMg} setopcardmag={setmobMag} />

            {window?.innerWidth > 740 && (
              <div className=" my-28 px-14 h-32 sm:h-[30vh] flex flex-row gap-6 justify-center text-white bg-burntsienna ">
                <div className=" w-96 h-full flex flex-col gap-4 justify-center items-center text-center text-xs sm:text-2xl font-merriweather ">
                  <img src={truck} className=" w-10 h-10 sm:w-24 sm:h-24 " />
                  <div>Pan-India Shipping</div>
                </div>
                <div className=" w-96 h-full flex flex-col gap-4 justify-center items-center text-center text-xs sm:text-2xl font-merriweather ">
                  <img src={starbox} className=" w-10 h-10 sm:w-24 sm:h-24 " />
                  <div>Assured Quality Check </div>
                </div>
                <div className=" w-96 h-full flex flex-col gap-4 justify-center items-center text-center text-xs sm:text-2xl font-merriweather ">
                  <img src={e2e} className=" w-10 h-10 sm:w-24 sm:h-24 " />
                  <div>End-to-End Solutions</div>
                </div>
                <div className=" w-96 h-full flex flex-col gap-4 justify-center items-center text-center text-xs sm:text-2xl font-merriweather ">
                  <img src={giftbox} className=" w-10 h-10 sm:w-24 sm:h-24 " />
                  <div>Customised Gift Design</div>
                </div>
              </div>
            )}

            <div className=" px-4 2xs:px-6 lg:px-16 2xl:px-56 relative w-full lg:h-[70vh] flex flex-col ">
              <div className=" flex flex-col lg:gap-4 text-[22px] 2xs:text-3xl sm:text-4xl lg:text-[50px] 2xl:text-6xl text-burntsienna font-extrabold leading-5 lg:leading-[50px] 2xl:leading-7 ">
                <p className=" text-base 2xs:text-2xl sm:text-[40px] 2xl:text-[43px] font-[350] tracking-[0.1em] sm:tracking-[0.2em] text-neutral-600 ">
                  PERSONALIZED
                </p>
                <div className=" flex flex-row text-end sm:text-start sm:gap-6 ">
                  <div className=" tracking-[0.1em] sm:tracking-[0.2em] font-thin text-nowrap text-neutral-400 ">
                    GIFT HAMPERS
                  </div>
                  FOR YOUR SPECIAL MOMENTS
                </div>
              </div>
              <div className=" px-4 sm:px-0 mt-20 sm:mt-0 sm:ml-auto py-10 w-full sm:w-[40%] lg:w-[420px] text-lg 2xs:text-2xl text-center sm:text-end font-extralight 2xs:font-light ">
                Every special moment deserves a gift as unique as the person
                receiving it. Whether it’s a wedding, corporate event, birthday,
                or festival, our custom-curated hampers bring joy and elegance
                to every occasion. Explore our exclusive collections today!
              </div>
              <div className=" max-md:mx-auto md:ml-auto w-[200px] h-[45px] flex items-center justify-center text-xl text-white hover:text-burntsienna font-sans font-medium border border-burntsienna bg-burntsienna hover:bg-neutral-100 transition-all duration-300 rounded-full cursor-pointer z-[5] ">
                Gift Now
              </div>
              <img
                src={giftboxrmbg}
                className=" -ml-3 lg:-ml-8 2xl:ml-0 2xl:-mt-10 absolute w-[420px] md:w-[960px] lg:w-[1000px] xl:w-[1250px] 2xl:w-[1500px] "
              />
            </div>

            <div
              id="reviews"
              className=" my-5 p-6 sm:p-12 lg:p-32 w-full flex flex-col gap-8 items-center "
            >
              <div className=" text-2xl 2xs:text-3xl sm:text-5xl text-center text-burntsienna font-semibold font-playfair ">
                {" "}
                Customer Reviews{" "}
              </div>
              <div className=" w-full overflow-hidden ">
                <div
                  className=" p-3 w-full flex flex-row gap-4 overflow-x-auto no-scrollbar "
                  ref={scrollRef}
                  onMouseEnter={() => setrevScrollStop(true)}
                  onMouseLeave={() => setrevScrollStop(false)}
                >
                  {reviews?.map((each, ind) => {
                    return (
                      <div className=" p-8 w-[300px] lg:w-[750px] flex flex-col flex-shrink-0 items-center gap-8 rounded-3xl shadow-md shadow-neutral-300 bg-neutral-100 cursor-pointer ">
                        <div className=" w-full flex flex-row justify-between text-xl ">
                          <div>{each?.rating}</div>
                          <div>Date</div>
                        </div>
                        <div className=" text-base lg:text-3xl text-center text-neutral-600 font-merriweather ">
                          {each?.review}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {true && (
              <div id="footer" className=" mt-8 sm:mt-32 ">
                <div className=" relative flex flex-col gap-14 justify-center items-center h-[600px] sm:h-[48vh] rounded-t-[34px] ">
                  <div
                    className=" absolute bottom-0 w-full h-[90vh] xs::h-[75vh] bg-fixed "
                    style={{
                      backgroundImage: `url(${footerBG})`,

                      maskImage: `linear-gradient(to top, white 0%, white 10%, white 15%, transparent 75%)`,
                    }}
                  />
                  <div
                    className=" absolute bottom-0 w-full h-[60vh] bg-neutral-500 opacity-70 "
                    style={{
                      maskImage: `linear-gradient(to top, black 0%, white 10%, white 10%, transparent 100%)`,
                    }}
                  />
                  <div className=" w-[85vw] z-[1] ">
                    <div className=" flex flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between ">
                      <div className=" flex flex-col items-center lg:items-start gap-4 ">
                        <img className="w-[100px]" src={logo1} />
                        {/* <img src={logo2} /> */}
                        <div className=" flex flex-row gap-4 ">
                          <img className=" w-14 cursor-pointer" src={faceIco} />
                          <img
                            className=" w-14 cursor-pointer"
                            src={instaIco}
                          />
                          <img className=" w-14 cursor-pointer" src={xIco} />
                          <img className=" w-14 cursor-pointer" src={linkIco} />
                        </div>
                        <div className=" flex flex-col gap-3 text-center lg:text-start ">
                          <p className=" font-semibold ">Address</p>
                          <p>Shastri nagar, Delhi - 110052</p>
                          <p>+919599559867</p>
                        </div>
                      </div>
                      <div className=" hidden lg:flex flex-row font-lato gap-32 ">
                        <div className=" flex flex-col gap-3 justify-start ">
                          <div className=" text-2xl text-burntsienna font-merriweather font-bold pb-4">
                            Quick Links
                          </div>
                          <Link className="text-xl font-extralight ">Home</Link>
                          <div className="text-xl font-extralight ">
                            Block-Printed
                          </div>
                          <div className="text-xl font-extralight ">
                            Gifting Solutions
                          </div>
                          <div className="text-xl font-extralight ">
                            Customization
                          </div>
                          <div className="text-xl font-extralight ">
                            About Us
                          </div>
                          <div className="text-xl font-extralight ">
                            Contact Us
                          </div>
                        </div>
                        <div className=" flex flex-col gap-3 justify-start ">
                          <div className=" text-2xl text-burntsienna font-merriweather font-bold pb-4">
                            Our Products
                          </div>
                          <div className="text-xl font-extralight ">
                            Block-Printed
                          </div>
                          <div className="text-xl font-extralight ">
                            Gifting Solutions
                          </div>
                        </div>
                        <div className=" flex flex-col gap-3 justify-start ">
                          <div className=" text-2xl text-burntsienna font-merriweather font-bold pb-4">
                            Legal Stuff
                          </div>
                          <div className="text-xl font-extralight ">
                            Shipping & Delivery
                          </div>
                          <div className="text-xl font-extralight ">
                            Terms & Conditions
                          </div>
                          <div className="text-xl font-extralight ">
                            Privacy & Policy
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow-0 gap-2 lg:gap-7">
                        <div className=" text-2xl ">Subscribe</div>
                        <div className="  ">
                          <div>
                            <input
                              className=" w-full lg:w-[250px] h-[3.5rem] px-5 rounded-md border-[1px] border-[#272727] "
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        <div className="px-7 py-[6px] w-full lg:w-fit rounded border-[1px] border-[#272727] text-center text-2xl text-[#272727] font-bold cursor-pointer">
                          Subscribe
                        </div>
                        <div className="text-xs font-light">
                          By subscribing with us you agree to our privacy policy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 sm:px-8 lg:px-36 w-full h-16 flex flex-row gap-4 justify-between items-center font-merriweather text-xs text-white bg-burntsienna ">
                  <div>Copyright ©2025 Vaagmiee. All Right Reserved</div>
                  <div className="flex flex-row gap-4 sm:gap-16 ">
                    <div>Cookie Policy</div>
                    <div>Privacy Policy</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </>
  );
}

export default Home;
