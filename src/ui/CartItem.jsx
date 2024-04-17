import tw, { styled } from "twin.macro";
import Proptypes from "prop-types";

const GreyContainer = styled.div`
  ${tw`hover:bg-gray-100 h-32 flex items-center`}
`;

const SideContainer = styled.div`
  ${tw`w-80 mx-auto flex gap-5 relative`}
`;

const ItemImg = styled.img`
  ${tw`w-24 rounded-lg`}
`;

const Icon = styled.img`
  ${tw`w-7 h-7 absolute right-0 top-[34px] lg:hidden`}
`;

const PriceContainer = styled.div`
  ${tw`flex flex-col justify-around`}
`;

const Span = styled.span`
  ${tw`block`}
`;

const Price = styled.span``;

const PrePrice = styled.span`
  ${tw`text-red-500 line-through pl-2`}
`;

function CartItem({ productName, price, preprice, src }) {
  return (
    <GreyContainer className="itemCard">
      <SideContainer>
        <ItemImg src={src} />
        <PriceContainer>
          <Span>{productName}</Span>
          <Span>
            <Price>${price}</Price>
            <PrePrice>${preprice}</PrePrice>
          </Span>
        </PriceContainer>
        <Icon
          className="cartButton"
          src="/removeFromCart.png"
          title="Remove item from cart"
        />
      </SideContainer>
    </GreyContainer>
  );
}

CartItem.propTypes = {
  productName: Proptypes.any,
  preprice: Proptypes.any,
  src: Proptypes.any,
  price: Proptypes.any,
};

export default CartItem;
