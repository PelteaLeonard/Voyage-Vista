import MuiDivider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

export const MainContainer = styled("main")({
  backgroundColor: "#fff",
  height: "120px",
  position: "relative",
  paddingTop: "calc(36px / 2)",
  borderRadius: "8px",
});

export const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 24px",
  height: "100%",
});

export const TabsContainer = styled("ul")({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  backgroundColor: "#3A3F44",
  borderRadius: "50px",
  top: "0",
  transform: "translateY(-50%)",
  padding: "8px",
  gap: "16px",
});

interface ITabProps {
  active: boolean;
}

export const Tab = styled("li")<ITabProps>(({ active }) => ({
  backgroundColor: active ? "#fff" : "none",
  color: active ? "#000" : "#fff",
  borderRadius: "32px",
  padding: "4px 16px",
  fontSize: "14px",
  fontWeight: "700",
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  ":hover": {
    cursor: "pointer",
  },
}));

export const Text = styled("span")({});

export const InnerContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "16px",
});

export const PlaneIconWrapper = styled("div")({});

export const LocationsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const DatesContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const SearchButton = styled(Button)({
  backgroundColor: "#3A3F44",
  fontSize: "13px",
  fontWeight: "700",
  width: "100px",
  ":hover": {
    backgroundColor: "#3A3F44",
    opacity: ".9",
  },
  "& .MuiButton-startIcon": {
    marginRight: "4px"
  }
});

export const InputField = styled(TextField)({
  width: "200px",
});

export const Divider = styled(MuiDivider)({
  width: "8px",
  backgroundColor: "#000",
});
