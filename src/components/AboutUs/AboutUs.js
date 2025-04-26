import VagButton from "../VagButton";

import heroBG from "../../images/aboutus-hero.jpg";
import ourstoryBG from "../../images/aboutus-ourstory.png";
import someBG from "../../images/fc1da22e23da5fca239ba14e422c4d81.png";
import rickyBerwick from "../../images/open-the-box-ricky-berwick.gif"

function AboutUs(params) {
  return (
    <div className=" w-full flex flex-col items-center gap-20 ">
      <div
        id="hero-aboutus"
        className=" lg:p-10 w-full lg:h-[90vh] flex flex-col gap-8 items-center lg:items-end bg-fixed "
        style={{
          backgroundImage: window?.innerWidth < 640 ? `` : `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: " 0% 20% ",
        }}
      >
        {window?.innerWidth < 640 && (
          <div className=" w-full h-[40vh] overflow-hidden " >
            <img src={heroBG} className=" scale-[2.2] pl-14 pt-10 " />
          </div>
        )}
        <div className=" lg:w-[850px] text-[40px] lg:text-8xl text-center lg:text-end font-playfair font-semibold text-burntsienna leading-tight ">
          Gifting that Speaks from the Heart
        </div>
        <div className=" w-64 lg:w-[430px] text-xl lg:text-4xl text-center lg:text-end text-neutral-700 font-lato font-thin leading-tight ">
          Every Vaagmiee creation is a celebration art, emotion and elegance!
        </div>
        <VagButton
          label="GIFT NOW"
          fit={true}
          width={3}
          textSize="text-xl lg:text-2xl"
        />
      </div>

      <div
        id="story-aboutus"
        className=" w-full flex flex-col gap-8 justify-center items-center "
      >
        <div className=" text-5xl lg:text-7xl font-playfair font-semibold text-burntsienna ">
          OUR STORY
        </div>
        <div
          className=" w-[80vw] h-[55vh] rounded-[50px] bg-neutral-300 "
          style={{
            backgroundImage: `url(${ourstoryBG})`,
            backgroundSize: window?.innerWidth < 640 ? "350%" : "cover",
            backgroundPosition:
              window?.innerWidth < 640 ? "3% 80%" : "center 80%",
          }}
        ></div>
        <div
          className=" sm:pt-4 px-9 sm:px-0 w-full xl:w-[51vw] flex flex-col gap-8 sm:gap-16 items-center text-center text-2xl sm:text-[28px] font-lato text-neutral-600 leading-9 "
          style={{
            wordSpacing: window?.innerWidth < 640 ? "2px" : "4px",
          }}
        >
          <div>
            Vaagmiee Gifting was founded with a belief that gifting isn’t just
            an act — it’s a feeling. Born from a love for design, Indian
            handcrafts, and soulful storytelling, we set out to redefine how
            people express care and emotion through curated pieces.
          </div>
          <div>
            From a modest collection of block-printed bedsheets to stunning
            bridal gift hampers, we've grown into a brand that makes thousands
            of special moments even more meaningful.
          </div>
        </div>
      </div>

      <div
        id="whatweoffer"
        className=" py-5 w-full flex flex-col gap-16 items-center "
      >
        <div className=" text-5xl lg:text-7xl text-center font-playfair font-semibold text-burntsienna ">
          {" "}
          What We Offer{" "}
        </div>
        <div className=" flex flex-wrap lg:flex-row gap-6 lg:gap-16 justify-center ">
          <div className=" py-8 px-5 w-[80vw] lg:w-96 flex flex-col gap-6 text-center font-lato rounded-3xl border-burntsienna border-t-2 border-b-2 bg-[#FFE9E3] leading-7 ">
            <div className=" text-4xl font-semibold text-burntsienna ">
              Luxury Gifting
            </div>
            <div className=" text-3xl leading-normal text-neutral-700 ">
              Bridal trousseau, groom boxes, festive & wedding gifts — all
              elegantly packed with personalization and charm.
            </div>
          </div>
          <div className=" py-8 px-5 w-[80vw] lg:w-96 flex flex-col gap-6 text-center font-lato rounded-3xl border-burntsienna border-t-2 border-b-2 bg-[#FFE9E3] leading-7 ">
            <div className=" text-4xl font-semibold text-burntsienna ">
              Home & Decor
            </div>
            <div className=" text-3xl leading-normal text-neutral-700 ">
              Bridal trousseau, groom boxes, festive & wedding gifts — all
              elegantly packed with personalization and charm.
            </div>
          </div>
          <div className=" py-8 px-5 w-[80vw] lg:w-96 flex flex-col gap-6 text-center font-lato rounded-3xl border-burntsienna border-t-2 border-b-2 bg-champagnepink leading-7 ">
            <div className=" text-4xl font-semibold text-burntsienna ">
              Customization
            </div>
            <div className=" text-3xl leading-normal text-neutral-700 ">
              Bridal trousseau, groom boxes, festive & wedding gifts — all
              elegantly packed with personalization and charm.
            </div>
          </div>
        </div>
      </div>

      <div className=" px-8 py-5 w-full flex flex-col gap-8 lg:gap-16 items-center justify-center ">
        <div className=" text-5xl lg:text-8xl font-playfair text-center font-semibold text-burntsienna ">
          Why Choose Us?
        </div>
        <div className=" px-2 flex flex-col gap-6 lg:gap-10 items-center justify-center text-2xl lg:text-5xl font-lato text-center text-neutral-600 ">
          <div className="  ">✔️ 100% handcrafted by Indian artisans</div>
          <div className="  ">✔️ Personalized and themed to your occasion</div>
          <div className="  ">
            ✔️ Luxurious presentation & premium product choices
          </div>
          <div className="  ">
            ✔️ Trusted by 3,000+ happy gifters across India
          </div>
        </div>
      </div>

      <div
        className=" mb-20 py-8 px-6 lg:py-28 w-[80vw] flex flex-col gap-8 items-center justify-center rounded-[60px] lg:rounded-3xl border-burntsienna border-t-2 border-b-2 bg-fixed "
        style={{
          backgroundImage: `url(${someBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
        }}
      >
        <div className=" text-7xl text-center font-playfair font-semibold text-burntsienna ">
          Ready to Gift with Heart & Style?
        </div>
        <div className=" text-xl sm:text-3xl text-center font-lato ">
          Explore our collections and experience the joy of soulful gifting.
        </div>
        <div className=" lg:mt-6 flex flex-col lg:flex-row gap-8 lg:gap-36 ">
          <VagButton
            label="Shope From Collection"
            fit={true}
            textSize={window?.innerWidth < 640 ? "text-2xl" : "text-3xl"}
          />
          <VagButton
            label="For Customize Orders"
            fit={true}
            textSize={window?.innerWidth < 640 ? "text-2xl" : "text-3xl"}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
