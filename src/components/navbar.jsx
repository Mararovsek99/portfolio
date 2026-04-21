const navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="group text-white text-lg p-2 inline-flex items-center gap-1 cursor-pointer">
        <span className="inline-block transition-transform duration-700 ease-out group-hover:-rotate-[360deg]">
          ©
        </span>

        <span className="overflow-hidden">
          <span className="inline-block transition-all duration-500 origin-left group-hover:-translate-x-17">
            Code by
          </span>
        </span>
        <span className="inline-block transition-all duration-500 group-hover:-translate-x-17 overflow-hidden w-[56px] group-hover:w-[150px] whitespace-nowrap">
          <span>Andrej</span>
          <span> </span>
          <span>Marovšek</span>
        </span>
      </div>
      {/* // navigation buttons */}
      <div>
        <button className=" text-white text-xl p-2 rounded-lg ">About</button>
        <button className=" text-white text-xl p-2 rounded-lg ml-6">
          Projects
        </button>
        <button className=" text-white text-xl p-2 rounded-lg ml-6">
          Contact
        </button>
      </div>
    </div>
  );
};

export default navbar;
