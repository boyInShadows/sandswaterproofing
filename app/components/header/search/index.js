"use client";

export default function SearchBar() {
  return (
   <div className="flex justify-end">
     <form className="relative flex items-center gap-3 w-[340px] mx-auto bg-[#E4E4F2]/20  px-[1.25rem]
                  backdrop-blur-2xl 
                  bg-gradient-to-r from-[#E4E4F2]/25 via-white/10 to-[#E4E4F2]/25 
                  rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] 
                  transition-all duration-700">
      <input
        type="text"
        placeholder="Search"
        required
        className="flex-1 bg-transparent border-none outline-none text-Forest placeholder:text-Forest/60 text-xl font-body"
      />

      <div id="search-icon" className="relative">
        <button
          type="submit"
          className="group relative block w-[64px] h-[64px] cursor-pointer"
        >
          {/* Circle part */}
          <div
            className="
              relative top-[-6px] left-0 w-[24px] h-[24px]
              border-[5px] border-Forest rounded-full
              transition-all duration-500 ease-in-out
              group-hover:top-0 group-hover:w-[34px] group-hover:h-[8px]
              group-hover:rounded-lg group-hover:border-none group-hover:bg-Forest
            "
          ></div>

          {/* Handle and arrow */}
          <span
            className="
              absolute block top-[44px] left-[28px] w-[35px] h-[10px]
              bg-transparent rounded-md rotate-[52deg]
              transition-all duration-500 ease-in-out
              group-hover:rotate-0 group-hover:top-[25px] group-hover:left-[36px] group-hover:w-[35px] 
            "
          >
            {/* Arrowhead lines */}
            <span
              className="
                absolute bottom-[-8px] left-[-12px] w-[20px] h-[5px] bg-Forest rounded-md
                transition-all duration-500 ease-in-out
                group-hover:bottom-[6px] group-hover:right-[-5px] group-hover:rotate-[52deg] group-hover:h-[7px]
              "
            ></span>
            <span
              className="
                absolute bottom-[-8px] left-[-12px] w-[20px] h-[5px] bg-Forest rounded-md
                transition-all duration-500 ease-in-out
                group-hover:bottom-[-5px] group-hover:right-[-5px] group-hover:rotate-[-52deg] group-hover:h-[7px]
              "
            ></span>
          </span>
        </button>
      </div>
    </form>
   </div>
  );
}
