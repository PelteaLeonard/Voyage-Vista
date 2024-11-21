import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocationOn } from "@mui/icons-material";
import { Link } from "../shared/styles";

export const Header = styled("header")({
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  zIndex: "1",
});

export const Nav = styled("nav")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1200px",
  color: "#fff",
  height: "60px",
});

export const LogoLinkWrapper = styled("div")({});

export const LogoLink = styled(Link)({
  color: "#fff",
  display: "flex",
  alignItems: "center",
});

export const LogoIcon = styled(LocationOn)({});

export const LogoTitle = styled("h1")({
  fontFamily: "Cedarville Cursive",
});

export const ButtonsContainer = styled("div")({
  display: "flex",
  gap: "8px",
});

export const StyledButton = styled(Button)({
  width: "100px",
  fontSize: "12px",
  backgroundColor: "#3A3F44",
  ":hover": {
    opacity: ".8",
    backgroundColor: "#3A3F44",
  },
});

export const RegisterButton = styled(StyledButton)({});

export const LoginButton = styled(StyledButton)({});
