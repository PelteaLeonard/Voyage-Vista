import { ChangeEvent, useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Form,
  Section,
  MainTitle,
  InputField,
  SubmitButton,
  ButtonWrapper,
  RequirementItem,
  BottomContainer,
  InputsContainer,
  RequirementText,
  RequirementsList,
  RequirementsTitle,
  CircleOutlinedIcon,
  RequirementsContainer,
  CircleIcon,
} from "./styles";

function Password() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [requirements, setRequirements] = useState({
    minimumOneDigit: false,
    minimumOneLowercase: false,
    minimumOneUppercase: false,
    minimumSixCharacters: false,
  });

  const handleClickShowOldPassword = () => {
    setShowOldPassword((show) => !show);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword((show) => !show);
  };

  const handleChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;

    const updatedRequirements = {
      minimumOneDigit: /\d/.test(newPassword),
      minimumOneLowercase: /[a-z]/.test(newPassword),
      minimumOneUppercase: /[A-Z]/.test(newPassword),
      minimumSixCharacters: newPassword.length >= 6,
    };

    setRequirements(updatedRequirements);
  };

  return (
    <Section>
      <MainTitle>Change password</MainTitle>
      <Form>
        <InputsContainer>
          <InputField
            type={showOldPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            size="small"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle old password visibility"
                    onClick={handleClickShowOldPassword}
                    edge="end"
                  >
                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <InputField
            type={showNewPassword ? "text" : "password"}
            label="New password"
            variant="outlined"
            size="small"
            required
            onChange={handleChangeNewPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle new password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </InputsContainer>
        <BottomContainer>
          <RequirementsContainer>
            <RequirementsTitle>Password requirements</RequirementsTitle>
            <RequirementsList>
              <RequirementItem>
                {requirements.minimumSixCharacters ? (
                  <CircleIcon />
                ) : (
                  <CircleOutlinedIcon />
                )}
                <RequirementText>Minimum six characters</RequirementText>
              </RequirementItem>
              <RequirementItem>
                {requirements.minimumOneLowercase ? (
                  <CircleIcon />
                ) : (
                  <CircleOutlinedIcon />
                )}
                <RequirementText>Minimum one lowercase</RequirementText>
              </RequirementItem>
              <RequirementItem>
                {requirements.minimumOneUppercase ? (
                  <CircleIcon />
                ) : (
                  <CircleOutlinedIcon />
                )}
                <RequirementText>Minimum one uppercase</RequirementText>
              </RequirementItem>
              <RequirementItem>
                {requirements.minimumOneDigit ? (
                  <CircleIcon />
                ) : (
                  <CircleOutlinedIcon />
                )}
                <RequirementText>Minimum one digit</RequirementText>
              </RequirementItem>
            </RequirementsList>
          </RequirementsContainer>
          <ButtonWrapper>
            <SubmitButton variant="contained">Change password</SubmitButton>
          </ButtonWrapper>
        </BottomContainer>
      </Form>
    </Section>
  );
}

export default Password;
