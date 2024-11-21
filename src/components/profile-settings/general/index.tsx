import { ButtonWrapper, Form, InputField, InputsContainer, Section, SubmitButton, Title } from "./styles";

function General() {
  return (
    <Section>
      <Title>Change general</Title>
      <Form>
        <InputsContainer>
          <InputField label="First name" variant="outlined" size="small"  />
          <InputField label="Last name" variant="outlined" size="small" />
        </InputsContainer>
        <ButtonWrapper>
          <SubmitButton variant="contained">Save changes</SubmitButton>
        </ButtonWrapper>
      </Form>
    </Section>
  );
}

export default General;
