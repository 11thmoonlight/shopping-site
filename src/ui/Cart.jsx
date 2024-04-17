import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";
import CartItem from "./CartItem";
import { cartData } from "../data/cartData";

const StyledNavLink = styled(NavLink)`
  ${tw`bg-red-500 hover:bg-red-600 shadow-lg w-48 h-12 text-white text-base font-semibold mt-4 text-center`}
`;

const Container = styled.div`
  ${tw`overflow-scroll fixed right-0 top-0 z-[60] bg-white text-lg w-full sm:w-[400px] rounded-xl shadow-lg pb-3`}
`;

const HeaderContainer = styled.div`
  ${tw`flex items-center justify-end mr-3 my-4 sm:my-5`}
`;
const TotalContainer = styled.div`
  ${tw`text-sm flex flex-col items-center py-3`}
`;

const Span = styled.span`
  ${tw`block`}
`;

const Price = styled.span`
  ${tw`font-semibold`}
`;

const Discount = styled.span`
  ${tw`font-semibold text-teal-500`}
`;

function Cart() {
  const totalPrice = cartData
    .map((data) => data.price)
    .reduce((acc, cur) => acc.concat(+cur), [])
    .reduce((acc, cur) => acc + cur, 0);

  const discounts =
    cartData
      .map((data) => data.preprice)
      .reduce((acc, cur) => acc.concat(+cur), [])
      .reduce((acc, cur) => acc + cur, 0) - totalPrice;

  console.log(totalPrice);
  console.log(cartData.length);

  return (
    <Container key={cartData.src}>
      <HeaderContainer>
        <div className="w-full flex justify-center">
          <span className="">Shopping Cart</span>
        </div>
      </HeaderContainer>

      {cartData.map((data) => (
        <CartItem
          productName={data.productName}
          price={data.price}
          preprice={data.preprice}
          src={data.src}
          key={data.id}
        />
      ))}

      <TotalContainer>
        <Span>
          <span className="">which totals to </span>
          <Price>${totalPrice}</Price>
        </Span>
        <Span>
          <span className="">you've saved </span>
          <Discount>${discounts}</Discount>
        </Span>
        <StyledNavLink to="/checkout">CHECKOUT</StyledNavLink>
      </TotalContainer>
    </Container>
  );
}

export default Cart;
