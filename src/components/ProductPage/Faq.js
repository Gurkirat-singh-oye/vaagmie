function Faq(params) {
  return (
    <div className=" w-full flex flex-col  ">
      <div className=" py-2 w-full flex flex-col gap-1 " >
        <div className=" flex flex-row justify-between ">
          <div className=" text-3xl font-bold ">What's in the Hamper?</div>
          <div className=" text-4xl rotate-90 ">{">"}</div>
        </div>
        <div className=" mx-2 h-[1px] bg-neutral-500 " />
      </div>
      <div className=" py-2 w-full flex flex-col gap-1 " >
        <div className=" flex flex-row justify-between ">
          <div className=" text-3xl font-bold ">Price</div>
          <div className=" text-4xl rotate-90 ">{">"}</div>
        </div>
        <div className=" mx-2 h-[1px] bg-neutral-500 " />
      </div>
      <div className=" py-2 w-full flex flex-col gap-1 " >
        <div className=" flex flex-row justify-between ">
          <div className=" text-3xl font-bold ">Shipping & Fulfillment</div>
          <div className=" text-4xl rotate-90 ">{">"}</div>
        </div>
        <div className=" mx-2 h-[1px] bg-neutral-500 " />
      </div>
      <div className=" py-2 w-full flex flex-col gap-1 " >
        <div className=" flex flex-row justify-between ">
          <div className=" text-3xl font-bold ">Assistance</div>
          <div className=" text-4xl rotate-90 ">{">"}</div>
        </div>
        <div className=" mx-2 h-[1px] bg-neutral-500 " />
      </div>
      <div className=" py-2 w-full flex flex-col gap-1 " >
        <div className=" flex flex-row justify-between ">
          <div className=" text-3xl font-bold ">Share</div>
          <div className=" text-4xl rotate-90 ">{">"}</div>
        </div>
        <div className=" mx-2 h-[1px] bg-neutral-500 " />
      </div>
    </div>
  );
}

export default Faq;
