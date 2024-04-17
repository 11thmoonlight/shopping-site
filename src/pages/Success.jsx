import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

const StyledNavLink = styled(NavLink)`
  ${tw`bg-orange-600 hover:bg-orange-700 w-60 h-14 disabled:bg-neutral-400 disabled:hover:bg-neutral-500 text-white tracking-wide font-semibold text-sm cursor-pointer mt-7`}
`;

function Success() {
  return (
    <div className="flex justify-center lg:mt-12 md:mt-10 mt-8 mb-10">
      <div className="flex flex-col lg:flex-row items-center rounded-3xl shadow-2xl overflow-hidden bg-orange-500 text-white">
        <img src="/success-sq.jpg" className="h-80 hidden lg:block" />
        <img src="/success-wide.jpg" className="w-[750px] lg:hidden" />
        <div className="w-[650px] flex items-center justify-center py-10 lg:py-0">
          <div className="flex flex-col items-center sm:block">
            <span className="block text-3xl font-semibold">congrats!</span>
            <span className="block sm:text-3xl mt-3">
              you've successfully placed in your order
            </span>
            <span className="block sm:text-2xl mt-3">
              reference code - 45789005
            </span>

            <StyledNavLink to="/success">RETURN HOME</StyledNavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
