function Decor() {
  return (
    <div>
      <div className="bg-teal-500 py-10 lg:mt-16 md:mt-14 sm:mt-12 mt-10 hidden lg:block">
        <div className="relative h-[500px] w-[1024px] mx-auto">
          <img
            src="/blog2.jpg"
            className="absolute w-72 rounded-lg shadow-lg bottom-0 left-0"
          />
          <img
            src="/blog3.jpg"
            className="absolute w-[400px] rounded-lg shadow-lg top-0 left-[280px] z-10"
          />
          <img
            src="/blog1.jpg"
            className="absolute w-72 rounded-lg shadow-lg right-4 top-[100px]"
          />
          <div className="h-44 w-[620px] bg-white rounded-lg shadow-lg absolute bottom-0 left-[350px] z-20 p-7 flex items-center justify-between">
            <div>
              <span className="block text-2xl tracking-wide font-semibold">
                elevate your home decor
              </span>
              <span className="block text-xl">
                a guide to incorporating ceramics
              </span>
            </div>
            <button className="w-44 h-14 bg-teal-500 hover:bg-teal-600 text-white shadow-lg">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decor;
