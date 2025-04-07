



function VagButton(params) {
    

    return <div>
        <div className=" w-[150px] lg:w-[200px] h-[40px] lg:h-[55px] flex items-center justify-center text-lg lg:text-2xl text-white hover:text-burntsienna font-sans font-medium border border-burntsienna bg-burntsienna hover:bg-neutral-100 transition-all duration-300 rounded-full cursor-pointer" >
            {params?.label}
        </div>
    </div>
}



export default VagButton;