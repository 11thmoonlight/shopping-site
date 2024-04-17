import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

const StyledLogo = styled.img`
  ${tw`w-48 px-4 py-2`}
`;

function Logo() {
  return (
    <NavLink to="index">
      <StyledLogo src="/g-name-row.png" />
    </NavLink>
  );
}

export default Logo;
