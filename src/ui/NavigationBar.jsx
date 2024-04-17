function NavigationBar() {
  return (
    <nav className="bg-white hidden lg:flex justify-between items-center shadow-md text-sm fixed right-0 left-0 top-0 z-50 h-20">
      <a href="index.html">
        <img src="/g-name-row.png" className="w-48 px-4 py-2" />
      </a>
      <div className="flex items-center">
        <a href="hot.html">
          <div className="flex items-center px-3 gap-x-2 hover:bg-stone-50 py-5 rounded-2xl">
            <img src="/hot.png" className="w-2" alt="" />
            Hot
          </div>
        </a>
        <a href="new.html">
          <div className="flex flex-row-reverse items-center px-3 hover:bg-stone-50 h-[60px] rounded-2xl">
            <img src="/new.png" className="w-2" alt="" />
            New Products
          </div>
        </a>
        <a href="plates.html">
          <div className="flex items-center px-3 gap-x-2 hover:bg-stone-50 py-5 rounded-2xl">
            <img src="/plates.png" className="w-3" alt="" />
            Plates
          </div>
        </a>
        <a href="tiles.html">
          <div className="flex items-center px-3 gap-x-2 hover:bg-stone-50 py-5 rounded-2xl">
            <img src="icons/tiles.png" className="w-3" alt="" />
            Tiles
          </div>
        </a>
        <a href="ute.html">
          <div className="flex items-center px-3 gap-x-2 hover:bg-stone-50 py-5 rounded-2xl">
            <img src="/uten.png" className="w-2" alt="" />
            Kitchen Utensils
          </div>
        </a>
        <a href="#">
          <div className="flex items-center px-4 hover:bg-stone-50 py-5 rounded-2xl">
            About Us
          </div>
        </a>
        <a href="#">
          <div className="flex items-center px-4 hover:bg-stone-50 py-5 rounded-2xl">
            Help
          </div>
        </a>
        <div className="flex items-center px-3 mx-3 h-9 gap-2 bg-red-500 cursor-pointer rounded-full text-w>">
          <img src="/cart.png" className="w-4" alt="" />
          Cart
          <div
            id="cartItems"
            className="bg-white text-red-500 rounded-full text-center leading-none flex items-center justify-center"
          >
            0
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
