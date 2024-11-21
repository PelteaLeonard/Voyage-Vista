import {
  CheckBox,
  FieldsContainer,
  Form,
  InputField,
  Link,
  Modal,
  SubmitButton,
  SubmitButtonWrapper,
  TermsContainer,
  Text,
  Title,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../store";
import { hideModal } from "../../features/register-modal/slice";

function RegisterModal() {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.registerModal.open);

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="register-modal-title"
    >
      <Form>
        <Title id="register-modal-title">Register</Title>
        <FieldsContainer>
          <InputField
            id="first name"
            label="First name"
            variant="outlined"
            size="small"
            required
          />
          <InputField
            id="last name"
            label="Last name"
            variant="outlined"
            size="small"
            required
          />
          <InputField
            id="email"
            type="email"
            label=" Email"
            variant="outlined"
            size="small"
            required
          />
          <InputField
            id="password"
            type="password"
            label=" Password"
            variant="outlined"
            size="small"
            required
          />
          <InputField
            id="password confirmation"
            type="password"
            label=" Confirm password"
            variant="outlined"
            size="small"
            required
          />
        </FieldsContainer>
        <TermsContainer>
          <CheckBox size="small" required />
          <Text>
            I agree with <Link to="">terms and conditions</Link>
          </Text>
        </TermsContainer>
        <SubmitButtonWrapper>
          <SubmitButton>Submit</SubmitButton>
        </SubmitButtonWrapper>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
