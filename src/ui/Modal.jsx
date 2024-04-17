import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Proptypes from "prop-types";
import tw, { styled } from "twin.macro";

const StyledModal = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-1g);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  ${tw`fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-[55]`}
`;

const Button = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 0.75rem;
  top: 1.3rem;
  z-index: 100;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <img src="/cart-cross.png" className="cursor-pointer h-9" />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Window.propTypes = {
  children: Proptypes.any,
  name: Proptypes.any,
};

Modal.propTypes = { children: Proptypes.any };

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
