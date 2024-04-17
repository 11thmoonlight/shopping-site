import tw, { styled } from "twin.macro";
import Proptypes from "prop-types";

const StyledH2 = styled.h2`
  ${tw`md:text-4xl text-2xl
    lg:mt-12 md:mt-10 sm:mt-8 mt-6
    flex justify-center`}
`;
const Img = styled.img`
  ${tw`rounded-2xl shadow-xl w-24 sm:w-28`}
`;
const ManifestoDiv = styled.div`
  ${tw`flex flex-col justify-around sm:pl-6 pl-3`}
`;

const BoldText = styled.span`
  ${tw`block font-semibold`}
`;

const Text = styled.span`
  ${tw`block`}
`;

function Manifesto({ src, boldText, text }) {
  return (
    <StyledH2>
      <Img src={src} />
      <ManifestoDiv>
        <BoldText>{boldText}</BoldText>
        <Text>{text}</Text>
      </ManifestoDiv>
    </StyledH2>
  );
}

Manifesto.propTypes = {
  boldText: Proptypes.any,
  text: Proptypes.any,
  src: Proptypes.any,
};

export default Manifesto;
