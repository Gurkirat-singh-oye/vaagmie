import searchIcon from "../../images/icons/Search.svg";
import cartIcon from "../../images/icons/cart.svg";
import userIcon from "../../images/icons/User.svg";
import menu from "../../images/icons/menu.svg";

import logo1 from "../../images/Vaagmiee-(2) 1.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Menu(params) {
  return (
    <div className="mr-5 flex flex-row gap-6 ">
      <div>
        <img src={searchIcon} />
      </div>
      <div
        onClick={() => {
          params?.setIsMenu(!params?.isMenu);
          params?.setMenuVisibility(true);
        }}
      >
        <img src={menu} />
      </div>
    </div>
  );
}

function HomeNav() {
  const [isMenu, setIsMenu] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="fixed w-[100vw] z-50">
      <div className="w-full h-6 flex justify-center bg-[#FFEBE5] ">
        Offers slide show
      </div>

      <div
        className={` relative sm:px-2 2xl:px-16 flex flex-row h-[65px] lg:h-[90px] 2xl:h-[110px] justify-between items-center bg-[#F5F5FA] `}
      >
        <div className=" ml-5 sm:ml-10 font-thin hover:scale-105 transition-all duration-700 delay-200 cursor-pointer">
          <img className="w-[65px] lg:w-[110px] my-2" src={logo1} />
        </div>
        <div className="flex flex-row items-center">
          {window?.innerWidth < 1270 ? (
            ""
          ) : (
            <div className=" lg:-mr-16 flex flex-row justify-center items-center px-14 gap-6 2xl:gap-10 text-neutral-600 text-base 2xl:text-lg ">
              <Link
                to="/"
                className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 "
              >
                Home
              </Link>
              <Link
                to="/block"
                className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 "
              >
                Block-Printed
              </Link>
              <Link
                to="/custom"
                className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 "
              >
                Customization
              </Link>
              <Link
                to="/aboutus"
                className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 "
              >
                About Us
              </Link>
              <Link
                to="/contactus"
                className="cursor-pointer hover:text-lg 2xl:hover:text-xl transition-all duration-300 "
              >
                Contact US
              </Link>
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
            <Menu
              isMenu={isMenu}
              setIsMenu={setIsMenu}
              setMenuVisibility={setMenuVisibility}
            />
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
      </div>

      {isMenu && (
        <div className=" fixed w-screen h-screen bg-opacity-35 bg-neutral-900 -z-10 " />
      )}
      <div
        className={`relative ${isMenu ? ` h-full ` : ` h-0 `} ${
          isMenu ? ` w-[100vw] ` : " w-0 "
        } ml-auto flex flex-col gap-10 ease-in-out duration-700 transition-all overflow-hidden  `}
      >
        <div className=" absolute w-full h-full backdrop-blur-[8px] bg-[#FFEBE5] bg-opacity-60 -z-10 " />
        <div className=" py-4 w-full h-full flex flex-col gap-6 items-center text-4xl text-nowrap text-burntsienna ">
          <Link
            to="/"
            className="cursor-pointer hover:text-lg transition-all duration-300 "
            onClick={() => setIsMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/block"
            className="cursor-pointer hover:text-lg transition-all duration-300 "
            onClick={() => setIsMenu(false)}
          >
            Block-Printed
          </Link>
          <Link
            to="/custom"
            className="cursor-pointer hover:text-lg transition-all duration-300 "
            onClick={() => setIsMenu(false)}
          >
            Customization
          </Link>
          <Link
            to="/aboutus"
            className="cursor-pointer hover:text-lg transition-all duration-300 "
            onClick={() => setIsMenu(false)}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="cursor-pointer hover:text-lg transition-all duration-300 "
            onClick={() => setIsMenu(false)}
          >
            Contact US
          </Link>
        </div>
        <div className=" m-3 w-full flex flex-row items-center justify-center gap-3 ">
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
          <div className=" w-12 h-12 flex flex-row items-center justify-center cursor-pointer">
            <img
              className="hover:scale-125 active:scale-90 transition-all duration-300 "
              src={cartIcon}
            />
          </div>
          <div className=" w-12 h-12 flex flex-row items-center  cursor-pointer">
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

export default HomeNav;
