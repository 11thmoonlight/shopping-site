import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

const StyledNavLink = styled(NavLink)`
  ${tw`px-1 w-24 sm:w-72`}
`;

function Selector() {
  return (
    <div>
      <div className="w-full flex lg:mt-14 md:mt-12 sm:mt-10 mt-6 text-gray-400 h-14 tracking-widest text-sm sm:text-base">
        <div className="sampleListBorder flex-1"></div>
        <StyledNavLink to="/index/popular" className="sampleListItem">
          POPULAR
        </StyledNavLink>
        <StyledNavLink to="/index/sale" className="sampleListItem">
          SALE
        </StyledNavLink>
        <StyledNavLink to="/index/new" className="sampleListItem">
          NEW IN
        </StyledNavLink>
        <div className="sampleListBorder flex-1"></div>
      </div>
    </div>
  );
}

export default Selector;
