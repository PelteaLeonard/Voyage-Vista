import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1200px",
  padding: "24px",
  background: `url(/modules/ibu/online-home/85603c4….85603c4….png) no-repeat right 24px top 4px,radial-gradient(ellipse 30% 26% at 80% 0,rgba(255,233,236,.6),transparent),radial-gradient(ellipse 30% 26% at bottom left,rgba(255,233,236,.6),transparent),#fcf9f6;`,
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
  gap: "20px",
});

export const AttractionButton = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "120px",
  height: "30px",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "4px",
  boxShadow: " 0 8px 16px 0 rgba(15,41,77,.08)",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#0f294d",
    color: "#fff",
  },
});

export const AttractionsCards = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
