import { useLocation } from "react-router-dom";
import VagButton from "../VagButton";
import Faq from "./Faq";
import {OPCard} from "../LandingPage/Home"

function ProductPage(params) {

  const loca = useLocation();
  const { product } = loca.state

  return (
    <div className=" py-14 w-full h-full flex flex-col gap-8 items-center  ">
      <div
        id="product"
        className=" h-[80vh] flex flex-row gap-20 "
      >
        <div className=" w-[55%] h-[70vh] max-h-[680px] rounded-[36px] bg-neutral-200 overflow-clip ">
          <img src={product ? product?.image : "image"} className=" w-full h-full object-cover " />
        </div>
        <div className=" w-[50%] flex flex-col gap-10 ">
          <div className=" text-7xl font-playfair font-semibold ">{product ? product?.name : "Product Title"}</div>
          <div className="  ">
            <p className=" text-3xl ">1200</p>
            <p className=" text-xl ">Tax Included</p>
          </div>
          <div>
            <VagButton label="Enquire Now" custRounds fit={1} width={4} />
          </div>
          <div id="faq" >

            <Faq />

          </div>
        </div>
      </div>
      <div id="similarproducts" className=" w-full h-full flex flex-col items-center gap-20 " >
        <div className=" w-full flex justify-center text-center text-2xl sm:text-6xl font-semibold font-playfair text-burntsienna " >Our Product Collection</div>
        <div className=" flex flex-row gap-16 " >
          {/**pull product recs from backend */}
          <OPCard />
          <OPCard />
          <OPCard />
        </div>
      </div>
      <div id="customerreviews" >

      </div>
      <div id="writeareview" className=" w-full h-[30vh] flex flex-col items-center justify-center gap-10 bg-white " >
        <div className=" text-[40px] text-burntsienna font-playfair font-semibold " >Customer Reviews</div>
        <div className=" w-full max-w-[33vw] flex flex-row justify-between items-center " >
          <div className=" text-lg text-burntsienna font-medium " >Be the first to leave a review</div>
          <VagButton label="Write a review" custRounds />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
