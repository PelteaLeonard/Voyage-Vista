import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "275px",
  boxShadow: "0 8px 16px 0 rgba(15,41,77,.08)",
});

export const ImageWrapper = styled("div")({
  display: "flex",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  overflow: "hidden",
});

export const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
});

export const DetailsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  padding: "16px",
  gap: "5px",
});

export const Name = styled("p")({
  fontSize: "15px",
  fontWeight: "600",
});

export const RatingWrapper = styled("div")({});

export const ReviewsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const RatingGrade = styled("p")({
  display: "flex",
  fontSize: "14px",
  backgroundColor: "#0f294d",
  color: "#fff",
  padding: "4px",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
});

export const NumberOfReviews = styled("p")({
  display: "flex",
  color: "#0f294d",
  fontWeight: "700",
  fontSize: "14px",
});
