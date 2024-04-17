import tw, { styled } from "twin.macro";

const Input = styled.input`
  ${tw`block py-2 px-3 border border-neutral-400 rounded-md w-72 md:w-96 mb-4`}

  &:-webkit-autofill {
    background-color: white !important;
  }

  &:autofill {
    background-color: white !important;
  }
`;

export default Input;
