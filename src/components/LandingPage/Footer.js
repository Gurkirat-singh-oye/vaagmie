import footerBG from "../../images/footerBG.png";

import logo1 from "../../images/Vaagmiee-(2) 1.png";

import faceIco from "../../images/icons/face.svg";
import instaIco from "../../images/icons/insta.svg";
import xIco from "../../images/icons/x.svg";
import linkIco from "../../images/icons/link.svg";
import { Link } from "react-router-dom";

function Footer(params) {
  return (
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
                <img className=" w-14 cursor-pointer" src={instaIco} />
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
                <div className="text-xl font-extralight ">Block-Printed</div>
                <div className="text-xl font-extralight ">
                  Gifting Solutions
                </div>
                <div className="text-xl font-extralight ">Customization</div>
                <div className="text-xl font-extralight ">About Us</div>
                <div className="text-xl font-extralight ">Contact Us</div>
              </div>
              <div className=" flex flex-col gap-3 justify-start ">
                <div className=" text-2xl text-burntsienna font-merriweather font-bold pb-4">
                  Our Products
                </div>
                <div className="text-xl font-extralight ">Block-Printed</div>
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
                <div className="text-xl font-extralight ">Privacy & Policy</div>
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
  );
}

export default Footer;
