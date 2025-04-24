function VagButton(params) {
  return (
    <div>
      <div
        className={` ${params?.width > 0 & params?.width <=2  ? `px-8` : params?.width > 2 & params?.width <= 4 ? ` px-12 ` : ` px-2 lg:px-5 `} ${
          params?.fit
            ? ` py-[3px] lg:py-3 `
            : `w-[90px] h-[28px] sm:w-[150px] sm:h-[40px] lg:w-[200px] lg:h-[48px] 2xl:w-[200px] 2xl:h-[55px]`
        } flex items-center justify-center ${ params?.textSize ? params?.textSize : `text-xs sm:text-lg lg:text-2xl`} text-white hover:text-burntsienna font-sans border border-burntsienna bg-burntsienna hover:bg-neutral-100 transition-all duration-300 rounded-full cursor-pointer`}
      >
        {params?.label}
      </div>
    </div>
  );
}

export default VagButton;
