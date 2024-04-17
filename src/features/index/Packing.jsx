function Packing() {
  return (
    <div>
      <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-lg lg:mt-16 md:mt-14 sm:mt-12 mt-10 flex flex-col items-center">
        <span className="block tracking-wider font-semibold">
          indestructable packing
        </span>
        <span className="block">prepared for the worst case scenario</span>
      </h2>

      <div className="overflow-x-scroll">
        <div className="flex justify-between px-4 mx-auto lg:w-[980px] w-[750px] lg:mt-16 md:mt-14 sm:mt-12 mt-10">
          <img src="/pack4.jpg" className="rounded-xl shadow-md lg:w-72 w-56" />
          <img src="/pack5.jpg" className="rounded-xl shadow-md lg:w-72 w-56" />
          <img src="/pack6.jpg" className="rounded-xl shadow-md lg:w-72 w-56" />
        </div>
      </div>
    </div>
  );
}

export default Packing;
