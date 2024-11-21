import { hideModal } from "../../features/reset-password-modal/slice";
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

function ResetPasswordModal() {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.resetPasswordModal.open);

  const handleClose = () => {
    dispatch(hideModal());
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="reset-password-modal-title"
    >
      <Form>
        <Title id="reset-password-modal-title">Reset Password</Title>
        <FieldsContainer>
          <InputField
            id="password"
            type="password"
            label="New password"
            variant="outlined"
            size="small"
          />
          <InputField
            id="password"
            type="password"
            label="Confirm new password"
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

export default ResetPasswordModal;
