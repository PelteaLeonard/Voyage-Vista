import { hideModal } from "../../features/login-modal/slice";
import { showModal } from "../../features/forgot-password-modal/slice";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  Form,
  Modal,
  Title,
  InputField,
  SubmitButton,
  FieldsContainer,
  SubmitButtonWrapper,
  ForgotPasswordButton,
  ForgotPasswordButtonWrapper,
} from "./styles";

function LoginModal() {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.loginModal.open);

  const handleClose = () => {
    dispatch(hideModal());
  };

  const handleClickForgotPasswordButton = () => {
    dispatch(hideModal());
    dispatch(showModal());
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="login-modal-title"
    >
      <Form>
        <Title id="login-modal-title">Login</Title>
        <FieldsContainer>
          <InputField
            id="email"
            type="email"
            label=" Email"
            variant="outlined"
            size="small"
          />
          <InputField
            id="password"
            type="password"
            label=" Password"
            variant="outlined"
            size="small"
          />
        </FieldsContainer>
        <ForgotPasswordButtonWrapper>
          <ForgotPasswordButton
            type="button"
            onClick={handleClickForgotPasswordButton}
          >
            Forgot password?
          </ForgotPasswordButton>
        </ForgotPasswordButtonWrapper>
        <SubmitButtonWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SubmitButtonWrapper>
      </Form>
    </Modal>
  );
}

export default LoginModal;
