


function ComingSoon(params) {
    

    return <div className=" lg:py-24 w-[85vh] lg:w-full h-[80vh] lg:h-[70vh] flex flex-col gap-28 items-center justify-center lg:justify-start " >
        <div className=" text-xl lg:text-5xl text-burntsienna font-adamina font-semibold " >
            {params?.title}
        </div>
        <div className=" text-3xl lg:text-9xl text-burntsienna font-adamina " >
            Coming Soon!
        </div>
    </div>

}



export default ComingSoon;