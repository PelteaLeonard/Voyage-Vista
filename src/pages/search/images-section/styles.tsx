import { styled } from "@mui/material/styles";

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
  color: "#3A3F44"
});

export const ImagesContainer = styled("div")({
  display: "grid",
  gap: "10px",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "repeat(3, 1fr)",
  maxWidth: "1200px",

});

export const ImageWrapper = styled("div")({
  height: "300px",
  overflow: "hidden",
});

export const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "all 0.3s",
  ":hover":{
    cursor: "pointer",
    transform: "scale(1.1)",
  }
});
