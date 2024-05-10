import { useForm } from "react-hook-form";
import tw, { styled } from "twin.macro";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { userData } from "../data/userData";

const Form = styled.form`
  ${tw`md:text-lg relative`}
`;

const Select = styled.select`
  ${tw`block py-2 px-3 border border-neutral-400 rounded-md w-72 md:w-96 mb-4`}
`;

const StyledButton = styled.button`
  ${tw`bg-teal-500 hover:bg-teal-600 w-60 h-14 text-white tracking-wide font-semibold text-sm cursor-pointer mt-5`}
`;

function UserForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit({
    fullName,
    add1,
    add2,
    city,
    state,
    country,
    zip,
    email,
    phoneNo,
  }) {
    userData.push({
      fullName,
      add1,
      add2,
      city,
      state,
      country,
      zip,
      email,
      phoneNo,
    });
    console.log(userData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This feild is required",
            maxLength: 100,
          })}
        />
      </FormRow>

      <FormRow label="Address Line 1" error={errors?.add1?.message}>
        <Input
          type="text"
          id="add1"
          {...register("add1", {
            required: "This feild is required",
            maxLength: 100,
          })}
        />
      </FormRow>

      <FormRow label="Address Line 2" error={errors?.add2?.message}>
        <Input
          type="text"
          id="add2"
          {...register("add2", {
            required: "This feild is required",
            maxLength: 100,
          })}
        />
      </FormRow>

      <FormRow label="City" error={errors?.city?.message}>
        <Input
          type="text"
          id="city"
          {...register("city", {
            required: "This feild is required",
            maxLength: 100,
          })}
        />
      </FormRow>

      <FormRow label="State/Province" error={errors?.state?.message}>
        <Input
          type="text"
          id="state"
          {...register("state", {
            required: "This feild is required",
            maxLength: 50,
          })}
        />
      </FormRow>

      <FormRow label="Country" error={errors?.country?.message}>
        <Select
          id="country"
          {...register("country", {
            required: "This feild is required",
          })}
        >
          <option value="australia">Australia</option>
          <option value="austria">Austria</option>
          <option value="canada">Canada</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="uae">United Arab Emirates</option>
          <option value="usa">United States of America</option>
          <option value="uk">United Kingdom</option>
        </Select>
      </FormRow>

      <FormRow label="Zip Code" error={errors?.zip?.message}>
        <Input
          type="text"
          id="zip"
          {...register("zip", {
            required: "This feild is required",
            maxLength: 50,
          })}
        />
      </FormRow>

      <FormRow label="Email Address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This feild is required",
            maxLength: 100,
          })}
          placeholder="your receipt will be sent here"
        />
      </FormRow>

      <FormRow label="Phone Number" error={errors?.phoneNo?.message}>
        <Input
          type="tell"
          id="phoneNo"
          {...register("phoneNo", {
            required: "This feild is required",
            maxLength: 20,
          })}
          placeholder="in case of any delivery issues"
        />
      </FormRow>

      <StyledButton>SUBMIT</StyledButton>
    </Form>
  );
}

export default UserForm;
