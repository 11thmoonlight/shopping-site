import tw, { styled } from "twin.macro";
import { useState } from "react";
import Products from "../../ui/Products";

const StyledNavLink = styled.button`
  ${tw`px-1 w-24 sm:w-72`}
`;

function Selector() {
  const [isOpenPopular, setIsOpenPopular] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isOpenSale, setIsOpenSale] = useState(false);

  return (
    <>
      <div className="w-full flex lg:mt-14 md:mt-12 sm:mt-10 mt-6 text-gray-400 h-14 tracking-widest text-sm sm:text-base">
        <div className="sampleListBorder flex-1"></div>
        <StyledNavLink
          className="sampleListItem"
          onClick={() => {
            setIsOpenPopular(true);
            setIsOpenNew(false);
            setIsOpenSale(false);
          }}
        >
          POPULAR
        </StyledNavLink>
        <StyledNavLink
          className="sampleListItem"
          onClick={() => {
            setIsOpenSale(true);
            setIsOpenNew(false);
            setIsOpenPopular(false);
          }}
        >
          SALE
        </StyledNavLink>
        <StyledNavLink
          className="sampleListItem"
          onClick={() => {
            setIsOpenNew(true);
            setIsOpenSale(false);
            setIsOpenPopular(false);
          }}
        >
          NEW IN
        </StyledNavLink>
        <div className="sampleListBorder flex-1"></div>
      </div>

      <div className="mt-8 text-sm overflow-x-scroll">
        {!isOpenNew && !isOpenPopular && !isOpenSale && (
          <div className="flex justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto">
            <Products
              src="/prod3.jpg"
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
              src="/prod1.jpg"
              price="65.00"
              preprice="85.00"
              productName="Sample Dish 3"
              description="Description for Sample Dish 3"
              id="2224"
            />
          </div>
        )}
        {isOpenNew && (
          <div className="flex justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto">
            <Products
              src="/prod3.jpg"
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
              src="/prod1.jpg"
              price="65.00"
              preprice="85.00"
              productName="Sample Dish 3"
              description="Description for Sample Dish 3"
              id="2224"
            />
          </div>
        )}

        {isOpenPopular && (
          <div className="flex justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto">
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
        )}

        {isOpenSale && (
          <div className="flex justify-center gap-5 lg:gap-8 xl:gap-16 px-2 pb-3 w-[840px] md:w-auto">
            <Products
              src="/prod3.jpg"
              price="65.00"
              preprice="85.00"
              productName="Sample Dish 1"
              description="Description for Sample Dish 1"
              id="2222"
            />

            <Products
              src="/prod1.jpg"
              price="65.00"
              preprice="85.00"
              productName="Sample Dish 2"
              description="Description for Sample Dish 2"
              id="2223"
            />

            <Products
              src="/prod2.jpg"
              price="65.00"
              preprice="85.00"
              productName="Sample Dish 3"
              description="Description for Sample Dish 3"
              id="2224"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Selector;
