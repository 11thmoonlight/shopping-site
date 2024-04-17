import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";
import CheckingCart from "../features/CheckingCart";

const NavList = styled.nav`
  ${tw`flex items-center`}
`;

const StyledNavLink = styled(NavLink)`
  ${tw`flex items-center px-3 gap-x-2 hover:bg-stone-50 py-5 rounded-2xl`}
`;

const StyledTextNav = styled(NavLink)`
  ${tw`flex items-center px-4 hover:bg-stone-50 py-5 rounded-2xl`}
`;

const ImgW2 = styled.img`
  ${tw`w-2`}
`;

const ImgW3 = styled.img`
  ${tw`w-3`}
`;

function MainNav() {
  return (
    <NavList>
      <StyledNavLink to="/hot">
        <ImgW2 src="/hot.png" alt="hot icon" />
        Hot
      </StyledNavLink>

      <StyledNavLink to="/new">
        <ImgW2 src="/new.png" alt="new products icon" />
        New Products
      </StyledNavLink>

      <StyledNavLink to="/plates">
        <ImgW3 src="/plates.png" alt="plates icon" />
        Plates
      </StyledNavLink>

      <StyledNavLink to="/tiles">
        <ImgW3 src="/tiles.png" alt="tiles icon" />
        Tiles
      </StyledNavLink>

      <StyledNavLink to="/ute">
        <ImgW2 src="/uten.png" alt="kitchen utensils icon" />
        Kitchen Utensils
      </StyledNavLink>

      <StyledTextNav to="">About Us</StyledTextNav>

      <StyledTextNav to="">Help</StyledTextNav>

      <CheckingCart />
    </NavList>
  );
}

export default MainNav;
