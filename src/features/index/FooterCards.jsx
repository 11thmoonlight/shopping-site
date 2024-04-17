function FooterCards() {
  return (
    <div>
      <div className="text-white max-w-sm sm:max-w-xl lg:max-w-5xl mx-auto lg:mt-16 md:mt-14 sm:mt-12 mt-10">
        <div className="grid justify-items-center grid-cols-2 gap-5 lg:grid-cols-4">
          <div className="w-40 sm:w-56 relative rounded-2xl shadow-xl overflow-hidden">
            <img src="/footer1.jpg" className="w-full" alt="" />
            <div className="bg-black h-12 bg-opacity-50 flex items-center justify-center absolute bottom-0 left-0 right-0">
              Who We Are
            </div>
          </div>

          <div className="w-40 sm:w-56 relative rounded-2xl shadow-xl overflow-hidden">
            <img src="/footer2.jpg" className="w-full" alt="" />
            <div className="bg-black h-12 bg-opacity-50 flex items-center justify-center absolute bottom-0 left-0 right-0">
              How We Make Them
            </div>
          </div>

          <div className="w-40 sm:w-56 relative rounded-2xl shadow-xl overflow-hidden">
            <img src="/footer3.jpg" className="w-full" alt="" />
            <div className="bg-black h-12 bg-opacity-50 flex items-center justify-center absolute bottom-0 left-0 right-0">
              Ordering & Payment
            </div>
          </div>

          <div className="w-40 sm:w-56 relative rounded-2xl shadow-xl overflow-hidden">
            <img src="/footer4.jpg" className="w-full" alt="" />
            <div className="bg-black h-12 bg-opacity-50 flex items-center justify-center absolute bottom-0 left-0 right-0">
              FAQ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCards;
