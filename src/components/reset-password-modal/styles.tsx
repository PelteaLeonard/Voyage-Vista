import { Button, TextField } from "@mui/material";
import MuiModal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

export const Modal = styled(MuiModal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  export const Form = styled("form")({
    backgroundColor: "#fff",
    width: "500px",
    padding: "32px 42px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  });
  
  // Title (h1)
  export const Title = styled("h1")({
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px"
  });
  
  // FieldsContainer div
  export const FieldsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  });
  
  export const InputField = styled(TextField)({
    width: "100%",
  });
  
  // SubmitButtonWrapper div
  export const SubmitButtonWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  // SubmitButton (Button)
  export const SubmitButton = styled(Button)({
    display: "flex",
    width: "100%",
    backgroundColor: "#3A3F44",
    color: "#fff",
    fontSize: "12px",
    borderRadius: "8px",
    height: "40px",
    ":hover": {
      opacity: ".8",
      backgroundColor: "#3A3F44",
    },
  });