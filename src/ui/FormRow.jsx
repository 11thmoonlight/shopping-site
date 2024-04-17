import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${tw`block text-sm text-neutral-400 font-bold mb-2`}
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

FormRow.propTypes = {
  label: PropTypes.any,
  error: PropTypes.any,
  children: PropTypes.any,
};

export default FormRow;
