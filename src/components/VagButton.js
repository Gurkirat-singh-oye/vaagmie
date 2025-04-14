



function VagButton(params) {
    

    return <div>
        <div className=" w-[90px] h-[28px] sm:w-[150px] sm:h-[40px] lg:w-[200px] lg:h-[48px] 2xl:w-[200px] 2xl:h-[55px] flex items-center justify-center text-xs sm:text-lg lg:text-2xl text-white hover:text-burntsienna font-sans font-medium border border-burntsienna bg-burntsienna hover:bg-neutral-100 transition-all duration-300 rounded-full cursor-pointer" >
            {params?.label}
        </div>
    </div>
}



export default VagButton;