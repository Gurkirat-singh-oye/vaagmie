function AboutUs(params) {
  return (
    <div className=" w-full flex flex-col gap-20 ">
      <div
        id="hero-aboutus"
        className=" w-full h-[80vh] flex flex-col gap-12 items-center justify-center bg-neutral-300 "
      >
        <div className=" text-7xl font-playfair font-semibold ">
          Gifting that Speaks from the Heart
        </div>
        <div className=" text-3xl font-lato ">
          Every Vaagmiee creation is a celebration art, emotion and elegance!
        </div>
      </div>

      <div
        id="story-aboutus"
        className=" w-full flex flex-col gap-8 justify-center items-center "
      >
        <div className=" text-6xl font-playfair font-semibold ">OUR STORY</div>
        <div className=" w-[80vw] h-[70vh] rounded-[50px] bg-neutral-300 "></div>
        <div className=" w-[78vw] flex flex-col gap-6 items-center text-center text-[28px] font-lato ">
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

      <div id="whatweoffer" className=" py-5 w-full flex flex-col gap-8 items-center ">
        <div className=" text-6xl text-center font-playfair font-semibold ">
          {" "}
          What We Offer{" "}
        </div>
        <div className=" flex flex-row gap-4 justify-center ">
          <div className=" pt-3 pb-8 px-4 w-64 flex flex-col gap-6 text-center font-lato bg-neutral-300 leading-7 ">
            <div className=" text-[20px] font-semibold ">Luxury Gifting</div>
            <div className=" tracking-wider text-lg ">
              Bridal trousseau, groom boxes, festive & wedding gifts — all
              elegantly packed with personalization and charm.
            </div>
          </div>
          <div className=" pt-3 pb-8 px-4 w-64 flex flex-col gap-6 text-center font-lato bg-neutral-300 leading-7 ">
            <div className=" text-[20px] font-semibold ">Home & Decor</div>
            <div className=" tracking-wider text-lg ">
              Bridal trousseau, groom boxes, festive & wedding gifts — all
              elegantly packed with personalization and charm.
            </div>
          </div>
          <div className=" pt-3 pb-8 px-4 w-64 flex flex-col gap-6 text-center font-lato bg-neutral-300 leading-7 ">
            <div className=" text-[20px] font-semibold ">Customization</div>
            <div className=" tracking-wider text-lg ">
              Bridal trousseau, groom boxes, festive & wedding gifts — all
              elegantly packed with personalization and charm.
            </div>
          </div>
        </div>
      </div>

      <div className=" py-5 w-full flex flex-col gap-8 items-center justify-center " >
        <div className=" text-6xl font-playfair font-semibold " >
          Why Choose Us?
        </div>
        <div className=" flex flex-col gap-3 items-center justify-center text-2xl font-lato " >
          <div className="  " >
            ✔️ 100% handcrafted by Indian artisans
          </div>
          <div className="  " >
          ✔️ Personalized and themed to your occasion
          </div>
          <div className="  " >
          ✔️ Luxurious presentation & premium product choices
          </div>
          <div className="  " >
          ✔️ Trusted by 3,000+ happy gifters across India
          </div>
        </div>

      </div>

      <div className=" w-full h-[60vh] flex flex-col gap-8 items-center justify-center bg-neutral-300 " >
        <div className=" text-5xl text-center font-playfair font-semibold " >Ready to Gift with Heart & Style?</div>
        <div className=" text-3xl font-lato " >Explore our collections and experience the joy of soulful gifting.</div>
        <div className=" w-[60vw] flex flex-row justify-between " >
          <div className=" p-3 text-3xl font-lato rounded-xl bg-neutral-400 " >Shop Gifting Collection</div>
          <div className=" p-3 text-3xl font-lato rounded-xl bg-neutral-400 " >Shop Gifting Collection</div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
