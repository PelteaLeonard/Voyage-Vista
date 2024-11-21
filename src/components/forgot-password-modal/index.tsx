import { hideModal } from "../../features/forgot-password-modal/slice";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  FieldsContainer,
  Form,
  InputField,
  Modal,
  SubmitButton,
  SubmitButtonWrapper,
  Title,
} from "./styles";

function ForgotPasswordModal() {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.forgotPasswordModal.open);

  const handleClose = () => {
    dispatch(hideModal());
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="forgot-password-modal-title"
    >
      <Form>
        <Title id="forgot-password-modal-title">Forgot password</Title>
        <FieldsContainer>
          <InputField
            id="email"
            type="email"
            label=" Email"
            variant="outlined"
            size="small"
          />
        </FieldsContainer>
        <SubmitButtonWrapper>
          <SubmitButton>Submit</SubmitButton>
        </SubmitButtonWrapper>
      </Form>
    </Modal>
  );
}

export default ForgotPasswordModal;
