import { Circle, CircleOutlined } from "@mui/icons-material";
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

export const MainTitle = styled("h2")({
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

export const BottomContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const RequirementsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const RequirementsTitle = styled("p")({
  display: "flex",
  color: "#344767",
  fontWeight: "600",
});

export const RequirementsList = styled("div")({
  display: "flex",
  gap: "5px",
  flexDirection: "column",
});

export const RequirementItem = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const CircleIcon = styled(Circle)({
  display: "flex",
  fontSize: "18px",
  color: "#3A3F44",
})

export const CircleOutlinedIcon = styled(CircleOutlined)({
  display: "flex",
  fontSize: "18px",
});

export const RequirementText = styled("p")({
  display: "flex",
  color: "#67748E",
  fontSize: "14px",
});

export const ButtonWrapper = styled("div")({
  display: "flex",
  alignItems: "flex-end",
});

export const SubmitButton = styled(Button)({
  display: "flex",
  fontSize: "12px",
  backgroundColor: "#3A3F44",
  height: "33px",
  ":hover": {
    opacity: ".8",
    backgroundColor: "#3A3F44",
  },
});
