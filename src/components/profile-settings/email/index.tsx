import { ButtonWrapper, Form, InputField, InputsContainer, Section, SubmitButton, Title } from "./styles";

function Email() {
  return (
    <Section>
      <Title>Change email</Title>
      <Form>
        <InputsContainer>
          <InputField
            type="email"
            label="Email"
            variant="outlined"
            size="small"
            required
          />
          <InputField
            type="email"
            label="New email"
            variant="outlined"
            size="small"
            required
          />
        </InputsContainer>
        <ButtonWrapper>
          <SubmitButton variant="contained">Change email</SubmitButton>
        </ButtonWrapper>
      </Form>
    </Section>
  );
}

export default Email;
