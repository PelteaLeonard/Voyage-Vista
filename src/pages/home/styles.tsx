import { styled } from "@mui/material/styles";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import backgroundImage from "../../assets/images/background.jpg";

export const MainContainer = styled("main")({});

export const BannerContainer = styled("div")({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  color: "#fff",
});

export const MaskContainer = styled("div")({
  padding: "calc(50px + 60px) 0 60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, .3)",
  height: "100%",
});

export const InnerContainer = styled("div")({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Title = styled("h1")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
});

export const UspsContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "16px",
});

export const UspContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
});

export const UspIcon = styled(FavoriteBorder)({});

export const UspText = styled("p")({
  fontWeight: "700",
  backgroundImage:
    "linear-gradient(to right, currentColor 50%, transparent 50%)",
  backgroundRepeat: "repeat-x",
  backgroundSize: "3px 1px",
  backgroundPosition: "0 100%",
  paddingBottom: "3px",
});

export const SectionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
});
