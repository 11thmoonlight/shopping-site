function Tracking() {
  return (
    <div>
      <div className="py-5 bg-amber-500 lg:mt-16 md:mt-14 sm:mt-12 mt-10 hidden md:block">
        <div className="flex md:max-w-3xl lg:max-w-5xl mx-auto py-6 items-center">
          <img
            src="resources/track.jpg"
            className="w-60 lg:w-64 rounded-2xl shadow-xl"
            alt=""
          />
          <div className="text-white ml-20">
            <span className="block text-3xl">have you made an order?</span>
            <span className="block text-4xl mt-4 font-semibold">
              track it now!
            </span>
            <form action="" className="flex gap-5 mt-7">
              <input
                type="text"
                spellCheck="false"
                placeholder="reference code"
                className="w-60 h-12 text-amber-500 text-lg px-3 tracking-widest font-semibold"
              />
              <input
                type="submit"
                value="TRACK"
                className="w-36 h-12 bg-teal-500 hover:bg-teal-600 text-white shadow-lg"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="py-5 bg-amber-500 lg:mt-16 md:mt-14 sm:mt-12 mt-10 md:hidden">
        <div className="flex py-6 items-center justify-center relative">
          <img
            src="resources/track.jpg"
            className="w-80 rounded-2xl shadow-xl"
            alt=""
          />
          <div className="text-white flex flex-col justify-center absolute bottom-3 bg-black bg-opacity-50 p-4 rounded-xl">
            <span className="block text-2xl">have you made an order?</span>
            <span className="block text-3xl mt-4 font-semibold">
              track it now!
            </span>
            <form action="" className="flex gap-5 mt-7">
              <input
                type="text"
                spellCheck="false"
                placeholder="ref code"
                className="w-40 h-12 text-amber-700 text-lg px-3 tracking-widest font-semibold"
              />
              <input
                type="submit"
                value="TRACK"
                className="w-32 h-12 bg-teal-500 hover:bg-teal-600 text-white shadow-lg cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
