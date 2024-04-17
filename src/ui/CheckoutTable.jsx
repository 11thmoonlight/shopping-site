import tw, { styled } from "twin.macro";
import Proptypes from "prop-types";

const Container = styled.div`
  ${tw`flex rounded-2xl shadow-sm bg-neutral-50 justify-between w-[984px] h-[216px] flex-none mx-5`}
`;

const NumberContainer = styled.div`
  ${tw`flex items-center m-3`}
`;

const Number = styled.div`
  ${tw`w-8 h-8 rounded-full bg-black text-white text-center leading-8 font-bold`}
`;

const DetailsContainer = styled.div`
  ${tw`flex flex-col justify-between m-3 w-44`}
`;

const Title = styled.span`
  ${tw`block text-xs text-neutral-400 font-bold`}
`;

const TitleAnswer = styled.span`
  ${tw`block font-medium`}
`;

const Img = styled.img`
  ${tw`w-48 m-3 rounded-2xl`}
`;

const DescriptionContainer = styled.div`
  ${tw`m-3 w-56`}
`;

const PricesContainer = styled.div`
  ${tw`m-3 w-16 flex flex-col items-center`}
`;

const PriceContainer = styled.div`
  ${tw`flex items-center h-full`}
`;

function CheckoutTable({
  number,
  prePrice,
  src,
  description,
  discount,
  price,
}) {
  return (
    <Container>
      <NumberContainer>
        <Number>{number}</Number>
      </NumberContainer>

      <DetailsContainer>
        <div>
          <Title>product code - name</Title>
          <TitleAnswer>#104 - Item number 54 blue pretty</TitleAnswer>
        </div>

        <div>
          <Title>category</Title>
          <TitleAnswer>plate</TitleAnswer>
        </div>

        <div>
          <Title> original price</Title>
          <TitleAnswer>${prePrice}</TitleAnswer>
        </div>
      </DetailsContainer>

      <Img src={src} />

      <DescriptionContainer>
        <Title> item description</Title>
        <TitleAnswer>{description}</TitleAnswer>
      </DescriptionContainer>

      <PricesContainer>
        <Title>discount</Title>
        <PriceContainer>
          <TitleAnswer>${discount}</TitleAnswer>
        </PriceContainer>
      </PricesContainer>

      <PricesContainer>
        <Title>paid price</Title>
        <PriceContainer>
          <TitleAnswer>${price}</TitleAnswer>
        </PriceContainer>
      </PricesContainer>
    </Container>
  );
}

CheckoutTable.propTypes = {
  number: Proptypes.any,
  prePrice: Proptypes.any,
  src: Proptypes.any,
  description: Proptypes.any,
  discount: Proptypes.any,
  price: Proptypes.any,
};

export default CheckoutTable;
