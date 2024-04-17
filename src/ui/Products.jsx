import tw, { styled } from "twin.macro";
import Proptypes from "prop-types";

import { cartData } from "../data/cartData";

const Container = styled.div`
  ${tw`flex-none rounded-2xl shadow-md overflow-hidden relative`}
`;

const Img = styled.img`
  ${tw`w-80 sm:w-64 lg:w-80 mb-3`}
`;

const HoverText = styled.div`
  ${tw`absolute top-0 left-0 right-0 h-80 sm:h-64 lg:h-80 z-10 p-3 items-center
text-white bg-black leading-6 bg-opacity-50 hidden`}
`;

const Name = styled.span`
  ${tw`block font-semibold m-4`}
`;

const Description = styled.span`
  ${tw`block text-gray-600 m-4`}
`;

const PriceContainer = styled.span`
  ${tw`block m-4 font-bold`}
`;

const PrePrice = styled.span`
  ${tw`ml-5 text-red-600 line-through`}
`;

const Price = styled.span``;

const IconContainer = styled.div`
  ${tw`bg-red-500 rounded-full h-8 w-8 absolute bottom-5 right-5 lg:hidden flex items-center justify-center`}
`;

const Icon = styled.img`
  ${tw`h-5`}
`;

function Products({ src, price, preprice, productName, description, id }) {
  function handleClick() {
    cartData.push({ price, src, preprice, productName, id });
    console.log(cartData);
  }

  return (
    <Container className="itemCard">
      <Img src={src} className="itemPhoto" />
      <HoverText className="cardDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        praesentium blanditiis laboriosam deleniti ullam veritatis hic
        inventore, animi cum exercitationem voluptas facere consequuntur iusto
        quia dolore nisi, quae alias? Voluptas?
      </HoverText>
      <Name>{productName}</Name>
      <Description>{description}</Description>
      <PriceContainer>
        <Price>${price}</Price>
        <PrePrice>${preprice}</PrePrice>
      </PriceContainer>
      <IconContainer title="Add item to cart" className="cartButton">
        <Icon src="/plus.png" role="button" onClick={handleClick} />
      </IconContainer>
    </Container>
  );
}

Products.propTypes = {
  price: Proptypes.any,
  preprice: Proptypes.any,
  src: Proptypes.any,
  productName: Proptypes.any,
  description: Proptypes.any,
  id: Proptypes.any,
};

export default Products;
