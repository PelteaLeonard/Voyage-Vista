import {
  ArrowBack,
  ArrowForward,
  Circle,
  CircleOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export const Section = styled("section")({
  width: "100%",
  padding: "20px",
  maxWidth: "1200px",
  background:
    "url(/modules/ibu/online-home/f199613….f199613….png) no-repeat right 24px top 4px,radial-gradient(ellipse 30% 26% at 80% 0,rgba(204,243,255,.6),transparent),radial-gradient(ellipse 30% 26% at bottom left,rgba(204,243,255,.6),transparent),#e7f0e4;",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  borderRadius: "8px",
});

export const Title = styled("h1")({
  color: "#3A3F44",
});

export const VideoCardsContainer = styled("div")({});

export const VideoCard = styled("div")({});

export const Video = styled("video")({
  width: "100%",
});

export const BackIconButton = styled("button")({
  display: "flex",
  alignItems: "center",
  background: "none",
  border: "none",
});

export const ForwardIconButton = styled("button")({
  display: "flex",
  alignItems: "center",
  background: "none",
  border: "none",
});

export const CircleButton = styled("button")({
  display: "flex",
  alignItems: "center",
  background: "none",
  border: "none",
});

export const NavigationContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
});

export const ArrowBackIcon = styled(ArrowBack)({
  color: "#b1b6ba",
  fontSize: "18px",
  ":hover": {
    cursor: "pointer",
  },
});

export const ArrowForwardIcon = styled(ArrowForward)({
  color: "#b1b6ba",
  fontSize: "18px",
  ":hover": {
    cursor: "pointer",
  },
});

export const CircleIcon = styled(Circle)({
  color: "#8fbcbc",
  fontSize: "18px",
});

export const CircleOutlinedIcon = styled(CircleOutlined)({
  color: "#b1b6ba",
  fontSize: "18px",
  ":hover": {
    cursor: "pointer",
  },
});
