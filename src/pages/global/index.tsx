import Navbar from "../../components/navbar";
import LoginModal from "../../components/login-modal";
import RegisterModal from "../../components/register-modal";
import ResetPasswordModal from "../../components/reset-password-modal";
import ForgotPasswordModal from "../../components/forgot-password-modal";
import { Outlet } from "react-router-dom";

function Global() {
  return (
    <>
      <Navbar />
      <Outlet />
      <RegisterModal />
      <LoginModal />
      <ForgotPasswordModal />
      <ResetPasswordModal />
    </>
  );
}
export default Global;
