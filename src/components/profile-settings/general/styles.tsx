import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  background: "#fff",
  flexGrow: "1",
  borderRadius: "8px",
  gap: "32px",
  height: "fit-content",
  boxShadow: "0 8px 16px 0 rgba(15,41,77,.08)",
});

export const Title = styled("h2")({
  display: "flex",
  alignItems: "flex-start",
  color: "#344767",
  fontSize: "20px",
});

export const Form = styled("form")({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
});

export const InputsContainer = styled("div")({
    display: "flex",
    gap: "20px",
});

export const InputField = styled(TextField)({
    display: "flex",
    flexGrow: "1",
});

export const ButtonWrapper = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
});

export const SubmitButton = styled(Button)({
    fontSize: "12px",
    backgroundColor: "#3A3F44",
    ":hover": {
      opacity: ".8",
      backgroundColor: "#3A3F44",
    },
});
