import backgroundImage from "../../assets/images/background.jpg";
import { styled } from "@mui/material/styles";
import { LinkProps } from "./types";
import { Link as RouterLink } from "react-router-dom";

export const Main = styled("main")({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  position: "relative",
});

export const BannerContainer = styled("div")({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
  height: "100px",
  width: "100%",
});

export const MaskContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, .3)",
  height: "100%",
});

export const ContentWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  borderRadius: "24px 24px 0 0",
  backgroundColor: "#F4F7FA",
  position: "absolute",
  zIndex: "1",
  marginTop: "60px",
  width: "100%",
  height: "calc(100vh - 60px)",
});

export const ContentContainer = styled("div")({
  display: "flex",
  width: "100%",
  maxWidth: "1200px",
  gap: "20px",
  flexGrow: "1",
  padding: "30px 0",
});

export const Menu = styled("ul")({
  display: "flex",
  width: "250px",
  height: "fit-content",
  flexDirection: "column",
  backgroundColor: "#fff",
  padding: "20px 0",
  borderRadius: "8px",
  boxShadow: "0 8px 16px 0 rgba(15,41,77,.08)",
});

export const Item = styled("li")({
  display: "flex",
  textDecoration: "none",
});

export const Link = styled(RouterLink, {
  shouldForwardProp: (prop) => prop !== "active",
})<LinkProps>(({ active }) => ({
  display: "flex",
  textDecoration: "none",
  borderLeft: `${active ? "2px solid #3A3F44" : "2px solid transparent"}`,
  padding: "10px 0 10px 24px",
  color: `${active ? "#344767" : "#67748E"}`,
  width: "100%",
}));
