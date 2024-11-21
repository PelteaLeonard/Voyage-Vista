import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1200px",
  padding: "24px",
  background: `url(/modules/ibu/online-home/f199613….f199613….png) no-repeat right 24px top 4px,radial-gradient(ellipse 30% 26% at 80% 0,rgba(204,243,255,.6),transparent),radial-gradient(ellipse 30% 26% at bottom left,rgba(204,243,255,.6),transparent),#e7f0e4;`,
  gap: "20px",
  borderRadius: "8px",
  boxShadow: "0 8px 16px 0 rgba(15,41,77,.08)",
});

export const Title = styled("h1")({
  fontSize: "24px",
  display: "flex",
  justifyContent: "flex-start",
  fontWeight: "600",
});

export const ButtonsContainer = styled("div")({
  display: "flex",
  gap: "16px",
});

export const LocationButton = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "120px",
  height: "30px",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "4px",
  boxShadow:" 0 8px 16px 0 rgba(15,41,77,.08)",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#0f294d",
    color: "#fff",
  },
});

export const CardsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
