import { showModal as showLoginModal } from "../../features/login-modal/slice";
import { showModal as showRegisterModal } from "../../features/register-modal/slice";

import { useAppDispatch } from "../../store";
import {
  Nav,
  Header,
  LogoIcon,
  LogoLink,
  LogoTitle,
  LoginButton,
  RegisterButton,
  LogoLinkWrapper,
  ButtonsContainer,
} from "./styles";

function Navbar() {
  const dispatch = useAppDispatch();

  const handleClickRegisterButton = () => {
    dispatch(showRegisterModal());
  };

  const handleClickLoginButton = () => {
    dispatch(showLoginModal())
  }

  return (
    <Header>
      <Nav>
        <LogoLinkWrapper>
          <LogoLink to="">
            <LogoIcon />
            <LogoTitle>VoyageVista</LogoTitle>
          </LogoLink>
        </LogoLinkWrapper>
        <ButtonsContainer>
          <RegisterButton
            variant="contained"
            onClick={handleClickRegisterButton}
          >
            Register
          </RegisterButton>
          <LoginButton variant="contained"
          onClick={handleClickLoginButton}>Login</LoginButton>
        </ButtonsContainer>
      </Nav>
    </Header>
  );
}
export default Navbar;
