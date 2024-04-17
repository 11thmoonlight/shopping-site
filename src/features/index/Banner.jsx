function Banner() {
  return (
    <>
      <div className="font-medium h-125 lg:flex hidden relative">
        <img
          id="img1"
          src="/banner5.jpg"
          className="rounded-2xl shadow-2xl absolute bottom-0 left-4 z-10"
        />
        <img
          id="img2"
          src="/banner2-1.jpg"
          className="rounded-2xl shadow-2xl absolute top-4 left-[30%]"
        />
        <div className="absolute bg-white bottom-0 right-[20%] px-8 py-12 rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center space-y-8">
          <img src="/home.jpg" className="rounded-full w-24" />
          <span className="block text-2xl">home is where the heart is</span>
          <button className="px-10 py-3 bg-teal-500 hover:bg-teal-600 text-white shadow-lg">
            VISIT GALLERY
          </button>
        </div>
        <img
          id="img3"
          src="/banner1.jpg"
          className="rounded-2xl shadow-2xl absolute z-10 top-16 right-4"
        />
      </div>

      <div className="font-medium h-125 md:flex hidden lg:hidden relative">
        <img
          id="img1"
          src="/banner5.jpg"
          className="rounded-2xl shadow-2xl absolute top-8 left-4 z-10"
        />
        <img
          id="img2"
          src="/banner2-1.jpg"
          className="rounded-2xl shadow-2xl absolute top-16 right-6"
        />
        <div className="absolute bg-white bottom-0 left-[30%] px-8 py-12 rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center space-y-8">
          <img src="/home.jpg" className="rounded-full w-24" />
          <span className="block text-2xl">home is where the heart is</span>
          <button className="px-10 py-3 bg-teal-500 hover:bg-teal-600 text-white shadow-lg">
            VISIT GALLERY
          </button>
        </div>
      </div>

      <div className="font-medium mt-3 mx-3 hidden sm:block md:hidden relative shadow-lg">
        <img
          id="img1-sm"
          src="/banner5.jpg"
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute border-white border-2 top-20 left-4 px-8 py-12 rounded-2xl shadow-2xl z-20 flex flex-col items-center justify-center space-y-8">
          <img src="/home.jpg" className="rounded-full w-24 shadow-lg" />
          <span className="block text-2xl text-white batman">
            home is where the heart is
          </span>
          <button className="px-10 py-3 bg-teal-500 hover:bg-teal-600 text-white shadow-lg">
            VISIT GALLERY
          </button>
        </div>
      </div>

      <div className="font-medium mx-3 mt-3 sm:hidden relative shadow-lg">
        Name
        <img
          id="img1-sm"
          src="/banner5.jpg"
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute bottom-2 left-2 px-4 py-4 rounded-2xl shadow-2xl z-20 flex items-center justify-center space-x-4">
          <img src="/home.jpg" className="rounded-full w-16 shadow-lg" />
          <div className="flex flex-col space-y-3">
            <span className="block text-xl text-white batman">
              home is where
              <br />
              the heart is
            </span>
            <button className="px-5 py-3 bg-teal-500 hover:bg-teal-600 text-white shadow-lg text-sm">
              VISIT GALLERY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
