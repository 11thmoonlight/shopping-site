function BlackFooter() {
  return (
    <div>
      <div className="h-52 bg-black text-white hidden sm:block">
        <div className="max-w-screen-sm mx-auto pt-5 flex">
          <div className="px-7 border-r-2 border-white text-gray-500 text-xs flex flex-col items-center gap-4">
            <img src="icons/g-name-col-white.png" alt="" className="w-24" />
            <span className="block">© all rights reserved - 2024</span>
            <span className="block">designed by ceramos tech solutions</span>
          </div>
          <div className="pl-7 text-xs text-stone-500">
            <a className="block font-semibold pb-2 text-white">
              product categories
            </a>
            <a className="block">kitchen utensils</a>
            <a className="block">kitchen items</a>
            <a className="block">new products</a>
            <a className="block">house items</a>
            <a className="block">plates</a>
            <a className="block">tiles</a>
            <a className="block">hot</a>
          </div>
          <div className="pl-7 text-xs text-stone-500">
            <a className="block font-semibold pb-2 text-white">pages</a>
            <a className="block">who we are</a>
            <a className="block">who we make them</a>
            <a className="block">ordering and payment</a>
            <a className="block">faq</a>
            <a className="block font-semibold py-2 text-white">our service</a>
            <a className="block">contact us</a>
          </div>
        </div>
      </div>

      <div className="h-32 bg-black text-white sm:hidden">
        <div className="max-w-56 mx-auto pt-5 flex">
          <div className="text-gray-500 text-xs flex flex-col items-center gap-2">
            <img src="/g-name-col-white.png" alt="" className="w-16" />
            <span className="block"> © all rights reserved - 2024 </span>
            <span className="block"> designed by ceramos tech solutions </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackFooter;
