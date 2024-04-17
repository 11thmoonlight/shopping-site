import Products from "../../ui/Products";

function Selector() {
  return (
    <div>
      <div className="w-full flex lg:mt-14 md:mt-12 sm:mt-10 mt-6 text-gray-400 h-14 tracking-widest text-sm sm:text-base">
        <div className="sampleListBorder flex-1"></div>
        <div id="button1" className="sampleListItem px-1 w-24 sm:w-72">
          POPULAR
        </div>
        <div id="button2" className="sampleListItem px-1 w-24 sm:w-72 active">
          SALE
        </div>
        <div id="button3" className="sampleListItem px-1 w-24 sm:w-72">
          NEW IN
        </div>
        <div className="sampleListBorder flex-1"></div>
      </div>

      <div className="mt-8 text-sm overflow-x-scroll">
        <div
          id="popularItems"
          className="hidden justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto"
        >
          <Products
            src="/prod1.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 1"
            description="Description for Sample Dish 1"
            id="2222"
          />

          <Products
            src="/prod2.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 2"
            description="Description for Sample Dish 2"
            id="2223"
          />

          <Products
            src="/prod3.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 3"
            description="Description for Sample Dish 3"
            id="2224"
          />
        </div>

        <div
          id="saleItems"
          className="flex justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto"
        >
          <Products
            src="/prod1.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 1"
            description="Description for Sample Dish 1"
            id="2225"
          />
          <Products
            src="/prod2.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 2"
            description="Description for Sample Dish 2"
            id="2226"
          />

          <Products
            src="/prod3.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 3"
            description="Description for Sample Dish 3"
            id="2227"
          />
        </div>

        <div
          id="newItems"
          className="hidden justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto"
        >
          <Products
            src="/prod1.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 1"
            description="Description for Sample Dish 1"
            id="2225"
          />
          <Products
            src="/prod2.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 2"
            description="Description for Sample Dish 2"
            id="2226"
          />

          <Products
            src="/prod3.jpg"
            price="65.00"
            preprice="85.00"
            productName="Sample Dish 3"
            description="Description for Sample Dish 3"
            id="2227"
          />
        </div>
      </div>
    </div>
  );
}

export default Selector;
