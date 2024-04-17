import Logo from "./Logo";
import MainNav from "./MainNav";
import Shiping from "./Shiping";
import tw, { styled } from "twin.macro";

const Container = styled.nav`
  ${tw`bg-white hidden lg:flex justify-between items-center shadow-md text-sm fixed right-0 left-0 top-0 z-50 h-20`}
`;

function Header() {
  return (
    <>
      <Container>
        <Logo />
        <MainNav />
      </Container>
      <Shiping />
    </>
  );
}

export default Header;
