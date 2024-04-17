import tw, { styled } from "twin.macro";
import Modal from "../ui/Modal";
import Cart from "../ui/Cart";
import { cartData } from "../data/cartData";

const StyledCart = styled.div`
  ${tw`flex items-center px-3 mx-3 h-9 gap-2 bg-red-500 cursor-pointer rounded-full text-white`}
`;

const ImgW4 = styled.img`
  ${tw`w-4`}
`;

const Number = styled.div`
  ${tw`bg-white text-red-500 rounded-full text-center leading-none flex items-center justify-center`}
`;

function CheckingCart() {
  return (
    <Modal>
      <Modal.Open opens="cart">
        <StyledCart>
          <ImgW4 src="/cart.png" />
          Cart
          <Number style={{ aspectRatio: "1", width: "20px" }}>
            {cartData.length}
          </Number>
        </StyledCart>
      </Modal.Open>

      <Modal.Window name="cart">
        <Cart />
      </Modal.Window>
    </Modal>
  );
}

export default CheckingCart;
