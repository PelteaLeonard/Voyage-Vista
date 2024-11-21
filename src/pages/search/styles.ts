import { styled } from "@mui/material/styles";
import backgroundImage from "../../assets/images/background.jpg";

export const MainContainer = styled("main")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "30px",
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
});

export const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1200px",
  gap: "20px",
  flexGrow: "1",
  padding: "30px 0",
});

export const Title = styled("h1")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
