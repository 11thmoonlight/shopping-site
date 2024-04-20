import Products from "./Products";

function Popular() {
  return (
    <div className="justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto">
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
  );
}

export default Popular;
